/** Verifies the figures quoted on the marketing page against their real sources. */

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = p => readFileSync(resolve(ROOT, p), 'utf8');

const claimed = Object.fromEntries(
  [...read('constants/index.ts').matchAll(/export const (\w+_COUNT) = (\d+);/g)].map(m => [
    m[1],
    Number(m[2]),
  ]),
);

/* Docs nest — chart types live under content/docs/chart — so this has to
 * recurse. A flat readdir silently undercounted by twelve. */
function countPages(dir) {
  return readdirSync(dir, { withFileTypes: true }).reduce((total, entry) => {
    if (entry.isDirectory()) return total + countPages(resolve(dir, entry.name));
    return total + (entry.name.endsWith('.mdx') ? 1 : 0);
  }, 0);
}

const registry = JSON.parse(read('registry.json'));

const actual = {
  COMPONENT_COUNT: registry.items.filter(i => i.type === 'registry:ui').length,
  DOC_PAGE_COUNT: countPages(resolve(ROOT, 'content/docs')),
  TYPE_STYLE_COUNT: [
    ...read('components/ui/typography.tsx').matchAll(
      /^const (Display|Headline|Title|Body|Label)\d+:/gm,
    ),
  ].length,
  // A semantic scale is a token with a full 50-900 ramp; -500 stands in for it.
  SEMANTIC_SCALE_COUNT: new Set(
    [...read('app/globals.css').matchAll(/^ {2}--([a-z]+)-500:/gm)].map(m => m[1]),
  ).size,
};

/*
 * The README quotes the same figures in prose, which is exactly the kind of
 * place they rot. Each pattern must capture the number in group 1.
 */
const README = read('README.md');
const README_CLAIMS = [
  {
    label: 'README components',
    pattern: /(\d+) production-ready components/,
    key: 'COMPONENT_COUNT',
  },
  { label: 'README components', pattern: /\*\*(\d+) components\*\*/, key: 'COMPONENT_COUNT' },
  {
    label: 'README doc pages',
    pattern: /\*\*(\d+) documentation pages\*\*/,
    key: 'DOC_PAGE_COUNT',
  },
  { label: 'README scales', pattern: /(\d+) semantic colour scales/, key: 'SEMANTIC_SCALE_COUNT' },
];

let failed = false;

for (const { label, pattern, key } of README_CLAIMS) {
  const match = README.match(pattern);
  if (!match) {
    console.log(`SKIP  ${label.padEnd(22)} phrase not found — pattern may need updating`);
    continue;
  }
  const stated = Number(match[1]);
  const expected = actual[key];
  const ok = stated === expected;
  if (!ok) failed = true;
  console.log(`${ok ? 'pass' : 'FAIL'}  ${label.padEnd(22)} stated ${stated}, actual ${expected}`);
}

for (const [key, expected] of Object.entries(actual)) {
  const stated = claimed[key];
  const ok = stated === expected;
  if (!ok) failed = true;
  console.log(`${ok ? 'pass' : 'FAIL'}  ${key.padEnd(22)} stated ${stated}, actual ${expected}`);
}

if (failed) {
  console.error('\nUpdate the counts in constants/index.ts and README.md to match.');
  process.exit(1);
}
console.log('\nAll quoted figures match their sources.');
