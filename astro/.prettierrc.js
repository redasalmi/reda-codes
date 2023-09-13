/** @type {import("prettier").Config} */
export default {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.ts',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
