const ERROR = 2;

module.exports = {
  extends: ['@remix-run/eslint-config', 'prettier'],
  rules: {
    'prefer-const': ERROR,
    'react/prop-types': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR,
  },
  ignorePatterns: [
    'node_modules',
    '.cache',
    '/netlify/functions/server/index.js',
    'public/build',
    '.netlify',
    '.husky',
  ],
};
