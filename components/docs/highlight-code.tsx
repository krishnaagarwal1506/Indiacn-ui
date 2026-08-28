import { codeToHtml } from 'shiki';

import type { ShikiTransformer } from 'shiki';

export const transformers = [
  {
    code(node) {
      if (node.tagName === 'code') {
        const raw = this.source;
        node.properties['__raw__'] = raw;

        if (raw.startsWith('npm install')) {
          node.properties['__npm__'] = raw;
          node.properties['__yarn__'] = raw.replace('npm install', 'yarn add');
          node.properties['__pnpm__'] = raw.replace('npm install', 'pnpm add');
          node.properties['__bun__'] = raw.replace('npm install', 'bun add');
        }

        if (raw.startsWith('npx create-')) {
          node.properties['__npm__'] = raw;
          node.properties['__yarn__'] = raw.replace('npx create-', 'yarn create ');
          node.properties['__pnpm__'] = raw.replace('npx create-', 'pnpm create ');
          node.properties['__bun__'] = raw.replace('npx', 'bunx --bun');
        }

        // npm create.
        if (raw.startsWith('npm create')) {
          node.properties['__npm__'] = raw;
          node.properties['__yarn__'] = raw.replace('npm create', 'yarn create');
          node.properties['__pnpm__'] = raw.replace('npm create', 'pnpm create');
          node.properties['__bun__'] = raw.replace('npm create', 'bun create');
        }

        // npx.
        if (raw.startsWith('npx')) {
          node.properties['__npm__'] = raw;
          node.properties['__yarn__'] = raw.replace('npx', 'yarn');
          node.properties['__pnpm__'] = raw.replace('npx', 'pnpm dlx');
          node.properties['__bun__'] = raw.replace('npx', 'bunx --bun');
        }

        // npm run.
        if (raw.startsWith('npm run')) {
          node.properties['__npm__'] = raw;
          node.properties['__yarn__'] = raw.replace('npm run', 'yarn');
          node.properties['__pnpm__'] = raw.replace('npm run', 'pnpm');
          node.properties['__bun__'] = raw.replace('npm run', 'bun');
        }
      }
    },
  },
] as ShikiTransformer[];

/** Highlights a code string with Shiki for both light and dark themes. */
export async function highlightCode(code: string, language: string = 'tsx') {
  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: 'github-light',
      dark: 'ayu-dark',
    },
    transformers: [
      {
        pre(node) {
          // Append our layout classes — preserve Shiki's "shiki" class so
          // the CSS dual-theme selectors (.dark .shiki) still match, and keep
          // the inline style so --shiki-dark-bg / --shiki-dark CSS variables
          // are available for the dark-mode overrides in globals.css.
          const existing = (node.properties['class'] as string) ?? '';
          node.properties['class'] =
            `${existing} no-scrollbar min-w-0 overflow-x-auto px-4 py-4 outline-none text-[13px] leading-relaxed`.trim();
        },
      },
    ],
  });

  return html;
}
