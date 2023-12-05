module.exports = {
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /* Common rules */

    // Avoid using extensions in import e.g. "import Component from './component.tsx'"
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Ignore default export requirement
    'import/prefer-default-export': 'off',

    /* Typescript rules */

    // Allow to use exclamation point from typescript
    '@typescript-eslint/no-non-null-assertion': 'off',

    /* React rules */

    // Boolean props start with "is" or "has" e.g. "isActivated" or "hasBorder"
    'react/boolean-prop-naming': ['error', { validateNested: true }],

    // Prefer destructing for props state or context
    'react/destructuring-assignment': [
      'error',
      'always',
      { destructureInSignature: 'always' },
    ],

    // Use arrow functions to declare components
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],

    /* A11y rules */

    // Allow autofocus
    'jsx-a11y/no-autofocus': 'off',
  },
};
