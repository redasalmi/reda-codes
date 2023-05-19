/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	tailwind: true,
	postcss: true,
	serverModuleFormat: 'cjs',
	ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
	serverBuildPath: '.netlify/functions-internal/server.js',
	server:
		process.env.NETLIFY || process.env.NETLIFY_LOCAL
			? './server.ts'
			: undefined,
	future: {
		v2_routeConvention: true,
		v2_errorBoundary: true,
		v2_normalizeFormMethod: true,
		v2_meta: true,
	},
};
