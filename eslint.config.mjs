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
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'dist'] },
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
      'eslint-frontend-rules/no-default-export': [
        'error',
        {
          ignore: [
            '**/app/**/layout.{tsx,ts,js,jsx}',
            '**/app/**/page.{tsx,ts,js,jsx}',
            '**/*.config.{js,cjs,mjs,ts,tsx}',
          ],
        },
      ],
    },
  },
]);
