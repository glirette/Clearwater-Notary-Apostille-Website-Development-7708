import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdtemp, cp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const pages = ['index.html', 'city.html', 'form.html'];

async function verifyArtifacts(output) {
  const html = new Map();
  for (const page of pages) {
    const source = await readFile(path.join(root, page), 'utf8');
    const built = await readFile(path.join(output, page), 'utf8');
    const title = source.match(/<title>([^<]+)<\/title>/i)?.[1];
    assert.ok(title, `${page}: source title missing`);
    assert.ok(built.includes(`<title>${title}</title>`), `${page}: missing or fallback page`);
    assert.match(built, /<script src=["']script\.js["']><\/script>/i, `${page}: classic script reference missing`);
    html.set(page, built);
  }

  assert.match(html.get('index.html'), /data-tab="apostille"/);
  assert.match(html.get('city.html'), /class="city-name"/);
  assert.match(html.get('form.html'), /JotFormIFrame-232608449081155/);
  assert.equal(await readFile(path.join(output, 'script.js'), 'utf8'),
    await readFile(path.join(root, 'script.js'), 'utf8'), 'classic script missing or modified');

  // Check the URLs the built pages actually request, including Vite's hashed CSS.
  const assets = new Set();
  for (const [page, content] of html) {
    for (const match of content.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
      const url = match[1];
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) continue;
      const target = new URL(url, `http://local.test/${page}`);
      if (target.origin !== 'http://local.test') continue;
      const relative = decodeURIComponent(target.pathname).replace(/^\//, '');
      assert.ok(relative && !relative.includes('..'), `${page}: invalid local URL ${url}`);
      await readFile(path.join(output, relative));
      assets.add(target.pathname);
    }
  }
  assert.ok(assets.has('/script.js'));
  assert.ok([...assets].some(asset => asset.endsWith('.css')));
  return assets;
}

function strictServer(output) {
  return createServer(async (request, response) => {
    const pathname = new URL(request.url, 'http://local.test').pathname;
    let filename;
    try {
      const decoded = decodeURIComponent(pathname);
      const relative = decoded === '/' ? 'index.html' : decoded.slice(1);
      if (!relative || relative.split('/').includes('..')) throw Error('invalid path');
      filename = path.join(output, relative);
      const body = await readFile(filename);
      const type = filename.endsWith('.html') ? 'text/html; charset=utf-8'
        : filename.endsWith('.js') ? 'text/javascript; charset=utf-8'
          : filename.endsWith('.css') ? 'text/css; charset=utf-8' : 'application/octet-stream';
      response.writeHead(200, { 'Content-Type': type });
      response.end(body);
    } catch {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not Found');
    }
  });
}

test('built site contains distinct pages, exact classic script, and local assets', async () => {
  await verifyArtifacts(dist);
});

test('strict static server serves deep links and never substitutes index for missing files', async () => {
  const assets = await verifyArtifacts(dist);
  const server = strictServer(dist);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const page of ['/', '/index.html', '/form.html', '/city.html?city=tampa', '/city.html?city=miami']) {
      const result = await fetch(base + page);
      assert.equal(result.status, 200, page);
      assert.match(result.headers.get('content-type'), /^text\/html/, page);
      assert.match(await result.text(), /<title>/, page);
    }
    for (const asset of assets) {
      const result = await fetch(base + asset);
      assert.equal(result.status, 200, asset);
      if (asset.endsWith('.js')) assert.match(result.headers.get('content-type'), /^text\/javascript/);
      if (asset.endsWith('.css')) assert.match(result.headers.get('content-type'), /^text\/css/);
    }
    for (const missing of ['/missing.html', '/missing.js', '/city/tampa']) {
      const result = await fetch(base + missing);
      assert.equal(result.status, 404, missing);
      assert.doesNotMatch(await result.text(), /<title>Florida Apostille App/);
    }
  } finally {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});

test('artifact verifier rejects missing pages, missing script, and index fallback content', async () => {
  const temp = await mkdtemp(path.join(tmpdir(), 'static-build-'));
  try {
    await cp(dist, temp, { recursive: true });
    await rm(path.join(temp, 'form.html'));
    await assert.rejects(verifyArtifacts(temp), /ENOENT/);
    await cp(dist, temp, { recursive: true });
    await rm(path.join(temp, 'script.js'));
    await assert.rejects(verifyArtifacts(temp), /ENOENT/);
    await cp(dist, temp, { recursive: true });
    await writeFile(path.join(temp, 'city.html'), await readFile(path.join(temp, 'index.html')));
    await assert.rejects(verifyArtifacts(temp), /city\.html: missing or fallback page/);
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
