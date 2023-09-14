const ERROR = 2;

/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:astro/jsx-a11y-recommended',
		'plugin:astro/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prefer-const': ERROR,
		'no-unused-vars': [
			ERROR,
			{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
		],
		'astro/prefer-class-list-directive': ERROR,
		'astro/prefer-object-class-list': ERROR,
		'astro/prefer-split-class-list': ERROR,
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {},
		},
	],
};
