# Static site build

The production `npm run build` entry points are the root `index.html`,
`form.html`, and `city.html`. They share the root `styles.css` and classic
`script.js`. Vite transforms the stylesheet and emits the three HTML pages;
the build configuration copies the **same root** `script.js` bytes to
`dist/script.js` because classic script tags are not bundled by Vite. The
`src/` React implementation is separate and is not mounted by these pages.
Do not infer a deployed site's source from the canonical URLs in the HTML.
This repository does not establish which repository or artifact currently
serves `floridaapostille.app`.

With Node.js 20 or later and npm installed:

```sh
npm install --no-package-lock
npm run build
npm run test:build
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:8765/`, `/form.html`, and
`/city.html?city=tampa`. The Python server returns real 404 responses for
missing files; a single-page-app fallback can hide missing build outputs.
The artifact checks exercise these URLs on a strict static server, verify
distinct page identities and local asset responses, and reject output with
missing pages/scripts or an index fallback in place of a page. The Vite
warning that `script.js` cannot be bundled without `type="module"` is
expected: it remains a classic script at the existing URL. Third-party
frames and provider scripts require separate, stubbed browser testing.

There is no committed npm lockfile, so installation resolves the declared
dependency ranges at test time. This build does not configure hosting,
redirects, deployment, DNS, or external form providers.
