const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = require('node:path').resolve(__dirname, '..');
for (const name of ['index.html','city.html','form.html']) {
  const html = fs.readFileSync(root + '/' + name, 'utf8');
  assert.match(html, /<button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false">/);
  assert.match(html, /<ul class="nav-menu" id="primary-navigation">/);
  assert.equal((html.match(/id="primary-navigation"/g)||[]).length, 1);
}
const css = fs.readFileSync(root + '/styles.css', 'utf8');
assert.match(css, /\.menu-toggle:focus-visible\s*\{[^}]*outline:/);
const listeners = {};
const attrs = {'aria-expanded': 'false', 'aria-label':'Open navigation'};
const classes = new Set();
const links = [{addEventListener(type, cb) {this[type]=cb;}}];
const spans = [{style:{}},{style:{}},{style:{}}];
const toggle = {
  setAttribute(key, value) { attrs[key] = value; },
  querySelectorAll(selector) { assert.equal(selector, 'span'); return spans; },
  addEventListener(type, cb) {this[type] = cb;},
  focus() {this.focused = true;}
};
const nav = {
  classList: {contains(cls) {return classes.has(cls);}, toggle(cls, active) {active ? classes.add(cls) : classes.delete(cls);}},
  querySelectorAll(selector) {assert.equal(selector, 'a'); return links;}
};
const document = {
  addEventListener(type, cb) {listeners[type] = cb;},
  querySelector(selector) {return selector === '.menu-toggle' ? toggle : selector === '.nav-menu' ? nav : null;},
  querySelectorAll() {return [];}
};
const context = {document, window:{location:{search:'', pathname:'/index.html'}, addEventListener(){}}, URLSearchParams, console};
vm.runInNewContext(fs.readFileSync(root+'/script.js','utf8'), context);
listeners.DOMContentLoaded();
toggle.click(); assert.equal(attrs['aria-expanded'],'true'); assert.equal(attrs['aria-label'],'Close navigation'); assert.equal(classes.has('active'),true);
listeners.keydown({key:'Escape'}); assert.equal(attrs['aria-expanded'],'false'); assert.equal(toggle.focused,true);
toggle.click(); links[0].click(); assert.equal(attrs['aria-expanded'],'false');
process.stdout.write('Three nav structures, focus style, toggle/Escape/focus/link state passed\n');
const city = fs.readFileSync(root + '/city.html','utf8');
const inline = [...city.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1);
assert.ok(inline);
const cityElements = [{style:{},textContent:'City'}, {style:{},textContent:'City'}];
const cityDescription = {textContent:''};
const cityDocument = {
  title:'',
  addEventListener(type, cb) { if(type === 'DOMContentLoaded') this.load = cb; },
  querySelectorAll(selector) {return selector === '.city-name' ? cityElements : [];},
  querySelector(selector) {return selector === '.city-description' ? cityDescription : null;}
};
vm.runInNewContext(inline[1], {document:cityDocument, window:{location:{search:'?city=st-petersburg'}}, URLSearchParams});
cityDocument.load();
assert.match(cityDocument.title,/^St\. Petersburg FL/);
assert.ok(cityElements.every(el => el.textContent === 'St. Petersburg'));
assert.match(cityDescription.textContent,/^St\. Petersburg residents/);
assert.match(fs.readFileSync(root+'/script.js','utf8'), /cityParam === 'st-petersburg'\s*\? 'St\. Petersburg'/);
process.stdout.write('St. Petersburg title, heading placeholders and description passed\n');
const sharedCityElements = [{style:{},textContent:'City'}];
const sharedListeners = {};
const sharedDoc = {
  title:'',
  addEventListener(type, cb) {sharedListeners[type] = cb;},
  querySelector() {return null;},
  querySelectorAll(selector) {return selector === '.city-name' ? sharedCityElements : [];}
};
vm.runInNewContext(fs.readFileSync(root+'/script.js','utf8'), {
  document:sharedDoc, window:{location:{pathname:'/city.html',search:'?city=st-petersburg'},addEventListener(){}}, URLSearchParams, console
});
sharedListeners.DOMContentLoaded();
assert.match(sharedDoc.title, /^St\. Petersburg FL/);
assert.equal(sharedCityElements[0].textContent, 'St. Petersburg');
process.stdout.write('Shared city formatter passed\n');
