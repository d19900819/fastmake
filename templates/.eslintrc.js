const eslintrc = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  rules: {
    camelcase: 0,
    "@typescript-eslint/camelcase": "off",
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    'react/display-name': 'error',
    'react/no-find-dom-node': 'off',
  },
  globals: {
    gtag: true,
  },
};

module.exports = eslintrc;
