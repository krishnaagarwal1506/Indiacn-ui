/** Mirrors the token blocks in app/globals.css into the `theme` item of registry.json. */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CSS = readFileSync(resolve(ROOT, 'app/globals.css'), 'utf8');
const REGISTRY_PATH = resolve(ROOT, 'registry.json');

const CHECK = process.argv.includes('--check');

/** Custom properties declared directly inside a top-level block. */
function readBlock(opening) {
  const lines = CSS.split('\n');
  const start = lines.findIndex(l => l.trim().startsWith(`${opening} {`));
  if (start === -1) throw new Error(`block not found: ${opening}`);
  const end = lines.findIndex((l, i) => i > start && l.trim() === '}');
  const body = lines.slice(start + 1, end).join('\n');
  const out = {};
  // Values may span multiple lines (multi-part shadows), so match across newlines.
  for (const [, name, value] of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    out[name] = value.replace(/\s+/g, ' ').trim();
  }
  return out;
}

/** fumadocs tokens power the docs site only and are not part of the published theme. */
const isPublished = name => !name.startsWith('fd-') && !name.startsWith('color-fd-');

const sections = {
  theme: readBlock('@theme inline'),
  light: readBlock(':root'),
  dark: readBlock('.dark'),
};

const registry = JSON.parse(readFileSync(REGISTRY_PATH, 'utf8'));
const theme = registry.items.find(i => i.name === 'theme');
if (!theme) throw new Error('no `theme` item in registry.json');

const changes = [];
for (const [section, tokens] of Object.entries(sections)) {
  const target = theme.cssVars[section] ?? (theme.cssVars[section] = {});
  const wanted = Object.fromEntries(Object.entries(tokens).filter(([k]) => isPublished(k)));

  for (const [key, value] of Object.entries(wanted)) {
    if (!(key in target)) changes.push(`+ ${section}.${key} = ${value}`);
    else if (target[key] !== value) changes.push(`~ ${section}.${key}: ${target[key]} -> ${value}`);
  }
  for (const key of Object.keys(target)) {
    if (!(key in wanted)) changes.push(`- ${section}.${key}`);
  }

  theme.cssVars[section] = wanted;
}

if (changes.length === 0) {
  console.log('registry.json theme tokens already match app/globals.css');
  process.exit(0);
}

for (const c of changes) console.log(c);

if (CHECK) {
  console.error(`\n${changes.length} token(s) out of sync. Run: npm run theme:sync`);
  process.exit(1);
}

writeFileSync(REGISTRY_PATH, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`\nsynced ${changes.length} token(s) into registry.json`);
