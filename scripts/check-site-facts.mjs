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

const registry = JSON.parse(read('registry.json'));

const actual = {
  COMPONENT_COUNT: registry.items.filter(i => i.type === 'registry:ui').length,
  DOC_PAGE_COUNT: readdirSync(resolve(ROOT, 'content/docs')).filter(f => f.endsWith('.mdx')).length,
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

let failed = false;
for (const [key, expected] of Object.entries(actual)) {
  const stated = claimed[key];
  const ok = stated === expected;
  if (!ok) failed = true;
  console.log(`${ok ? 'pass' : 'FAIL'}  ${key.padEnd(22)} stated ${stated}, actual ${expected}`);
}

if (failed) {
  console.error('\nUpdate the counts in constants/index.ts to match.');
  process.exit(1);
}
console.log('\nAll quoted figures match their sources.');
