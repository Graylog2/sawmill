/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: [
        '*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx',
        '*.it.js', '*.it.jsx', '*.it.ts', '*.it.tsx',
      ],
      plugins: [
        'jest',
      ],
      extends: [
        'plugin:jest/recommended',
      ],
      rules: {
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect*', '(screen.)?find(All)?By*'] }],
        'react/jsx-no-constructed-context-values': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/extensions': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', ['sibling', 'index'], 'parent'],
      'newlines-between': 'always',
    }],
    'no-unused-vars': 'off',
    'max-len': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'any',
        prev: ['let', 'const'],
        next: ['let', 'const'],
      },
      {
        blankLine: 'any',
        prev: 'expression',
        next: 'expression',
      },
      {
        blankLine: 'any',
        prev: 'export',
        next: 'export',
      },
      {
        blankLine: 'always',
        prev: ['block', 'multiline-block-like', 'cjs-export', 'class', 'multiline-expression'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'multiline-block-like', 'class', 'multiline-expression', 'return'],
      },
    ],
    'sort-imports': 'off', // disabled in favor of 'import/order'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
