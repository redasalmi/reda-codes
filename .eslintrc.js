const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'prettier',
	],
	rules: {
		'prefer-const': ERROR,
		'react/prop-types': ERROR,
		'react/display-name': ERROR,
		'@typescript-eslint/no-unused-vars': ERROR,
	},
	ignorePatterns: [
		'node_modules',
		'.cache',
		'/netlify/functions/server/index.js',
		'/public/build',
		'.netlify',
		'.husky',
	],
};
