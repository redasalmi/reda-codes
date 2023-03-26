/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	future: {
		unstable_tailwind: true,
		unstable_postcss: true,
		v2_routeConvention: true,
	},
	ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
	...(process.env.NODE_ENV === 'production'
		? {
				server: './server.js',
				serverBuildPath: '.netlify/functions-internal/server.js',
		  }
		: undefined),
};
