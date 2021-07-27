const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019, // Allows parsing of modern ECMA features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src/', 'node_modules'],
      },
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
  },
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  globals: {
    __DEV__: true,
  },
}
