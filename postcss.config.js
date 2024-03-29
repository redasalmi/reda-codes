/** @type {import('postcss-load-config').Config} */
module.exports = {
	plugins: [
		require('@tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-preset-env'),
		require('cssnano'),
	],
};
