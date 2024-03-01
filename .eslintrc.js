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
