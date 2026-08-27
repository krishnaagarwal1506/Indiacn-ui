/** Fails if any themed fg/bg token pair drops below WCAG AA 4.5:1 in either theme. */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const AA = 4.5;
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CSS = readFileSync(resolve(ROOT, 'app/globals.css'), 'utf8');

/** Pull a top-level `selector { ... }` block's custom properties. */
function readBlock(selector) {
  const start = CSS.indexOf(`\n${selector} {`);
  if (start === -1) throw new Error(`block not found: ${selector}`);
  const end = CSS.indexOf('\n}', start);
  const body = CSS.slice(start, end);
  const decls = {};
  for (const [, name, value] of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    decls[name] = value.trim();
  }
  return decls;
}

/** Resolve `var(--x)` chains down to a literal colour. */
function resolveToken(name, decls, seen = new Set()) {
  if (seen.has(name)) throw new Error(`circular token: --${name}`);
  seen.add(name);
  const raw = decls[name];
  if (raw === undefined) return null;
  const varMatch = raw.match(/^var\(--([\w-]+)\)$/);
  if (varMatch) return resolveToken(varMatch[1], decls, seen);
  return /^#[0-9a-fA-F]{3,8}$/.test(raw) ? raw : null;
}

function channel(value) {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3)
    h = h
      .split('')
      .map(x => x + x)
      .join('');
  const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

const SEMANTICS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

/** Every pair that must hold, as [label, backgroundToken, foregroundToken]. */
const PAIRS = [
  ...SEMANTICS.map(s => [`filled ${s}`, s, `${s}-foreground`]),
  ...SEMANTICS.map(s => [`text-${s}`, 'neutral-0', s]),
  ...[...SEMANTICS, 'light', 'dark'].map(s => [`alert ${s}`, `alert-${s}-bg`, `alert-${s}-color`]),
  ['body text', 'neutral-0', 'neutral'],
];

const THEMES = [
  ['light', readBlock(':root')],
  ['dark', readBlock('.dark')],
];

let failed = 0;
let missing = 0;

for (const [themeName, decls] of THEMES) {
  console.log(`\n${themeName}`);
  for (const [label, bgToken, fgToken] of PAIRS) {
    const bg = resolveToken(bgToken, decls);
    const fg = resolveToken(fgToken, decls);

    if (!bg || !fg) {
      const which = !bg ? bgToken : fgToken;
      console.log(`  MISSING  ${label.padEnd(18)} --${which} has no value in ${themeName}`);
      missing += 1;
      continue;
    }

    const ratio = contrast(bg, fg);
    const ok = ratio >= AA;
    if (!ok) failed += 1;
    console.log(
      `  ${(ok ? 'pass' : 'FAIL').padEnd(8)} ${label.padEnd(18)} ` +
        `${bg} on ${fg}  ${ratio.toFixed(2)}:1`,
    );
  }
}

const problems = failed + missing;
if (problems > 0) {
  console.error(
    `\n${problems} problem(s): ${failed} below ${AA}:1, ${missing} token(s) missing a theme value.`,
  );
  process.exit(1);
}
console.log(`\nAll ${PAIRS.length * THEMES.length} pairs clear ${AA}:1.`);
