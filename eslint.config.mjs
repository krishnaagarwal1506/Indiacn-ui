import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import frontendRules from 'eslint-frontend-rules';

export default defineConfig([
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'dist',
      '_resource_UX4G@2.0.8/**',
      '.source/**',
      '.claude/**',
      '.playwright-mcp/**',
    ],
  },
  ...nextVitals,
  ...nextTs,
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier,
      frontendRules.configs.recommended,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      import: importPlugin,
      'eslint-frontend-rules': frontendRules,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            { pattern: '#/**', group: 'internal', position: 'after' },
            { pattern: 'public/**', group: 'internal', position: 'after' },
            { pattern: 'types/**', group: 'internal', position: 'after' },
            { pattern: 'assets/**', group: 'internal', position: 'after' },
            { pattern: 'pages/**', group: 'internal', position: 'after' },
            { pattern: 'components/**', group: 'internal', position: 'after' },
            { pattern: 'utils/**', group: 'internal', position: 'after' },
            { pattern: 'app/**', group: 'internal', position: 'after' },
            { pattern: 'lib/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      /*
       * eslint-frontend-rules 4.5.0's recommended config turns these off or
       * downgrades them, but the codebase follows all of them, so they stay on.
       */
      'eslint-frontend-rules/enforce-typography-components': 'error',
      'eslint-frontend-rules/top-level-const-snake': 'error',
      'eslint-frontend-rules/enforce-interface-type-naming': 'error',
      'eslint-frontend-rules/interface-type-required-first': 'error',
      'eslint-frontend-rules/enforce-kebab-case-filenames': 'error',
      'eslint-frontend-rules/no-focusable-non-interactive-elements': 'error',
      'eslint-frontend-rules/require-jsdoc-on-component': 'warn',
      'eslint-frontend-rules/require-jsdoc-on-root-function': 'warn',
      'eslint-frontend-rules/no-inline-arrow-functions-in-jsx': 'warn',

      /*
       * Renaming a component's public boolean props would break the API. Names
       * like checked, disabled and selected come from HTML, ARIA and Radix, and
       * asChild is shadcn's convention.
       */
      'eslint-frontend-rules/enforce-boolean-prop-naming': 'off',

      /*
       * Assumes one component per file, named after the file. Next's app router
       * requires layout.tsx to export RootLayout, and every *-demo.tsx and
       * multi-part component (card, accordion) exports several names by design.
       */
      'eslint-frontend-rules/filename-matches-component-name': 'off',

      /*
       * Crashes ESLint with "Fix objects must not be overlapped in a report"
       * when a handler is referenced as well as declared, e.g.
       * `const toggle = ...` used as `onClick={toggle.bind(null, x)}`.
       */
      'eslint-frontend-rules/enforce-event-handler-naming': 'off',

      'eslint-frontend-rules/no-default-export': [
        'error',
        {
          ignore: [
            '**/app/**/layout.{tsx,ts,js,jsx}',
            '**/app/**/page.{tsx,ts,js,jsx}',
            '**/*.config.{js,cjs,mjs,ts,tsx}',
            '**/app/**/sitemap.{tsx,ts,js,jsx}',
            '**/app/**/robots.{tsx,ts,js,jsx}',
          ],
        },
      ],
    },
  },
  {
    /*
     * Docs-site scaffolding: route components, MDX plumbing, demo files and the
     * marketing page. JSDoc is enforced where code ships to consumers —
     * components/ui, lib and utils — not on 128 one-line preview demos.
     */
    files: [
      'app/**/*.{ts,tsx}',
      'components/examples/**/*.tsx',
      'components/docs/**/*.tsx',
      'components/home/**/*.tsx',
    ],
    rules: {
      'eslint-frontend-rules/require-jsdoc-on-component': 'off',
    },
  },
  {
    /* Route exports named by Next: generateMetadata, sitemap, robots and so on
     * are framework contracts, not functions a reader needs described. */
    files: ['app/**/*.{ts,tsx}'],
    rules: {
      'eslint-frontend-rules/require-jsdoc-on-root-function': 'off',
    },
  },
  {
    /* Next's ImageResponse renders through satori, which only accepts inline
     * styles, so hoisting them is not possible here. */
    files: ['app/**/opengraph-image.tsx', 'app/**/twitter-image.tsx'],
    rules: {
      'eslint-frontend-rules/no-inline-static-style-object': 'off',
    },
  },
]);
