import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'system-ui', 'sans-serif'],
			},
			colors: {
				'ghost-white': 'hsl(228 33.3% 97.1%)',
				'slate-blue': 'hsl(250 79.6% 59.6%)',

				'light-gray': 'hsl(228 5.9% 83.3%)',
				'dim-gray': 'hsl(0 0% 31.8%)',
				'dark-gray': 'hsl(0 0% 69%)',

				chocolate: 'hsl(31 100% 34.3%)',
				'dark-orange': 'hsl(32 100% 51.2%)',

				'royal-blue': {
					DEFAULT: 'hsl(211 100% 34.3%)',
					opac: 'hsl(211 100% 34.3% / 0.227)',
				},

				'lime-green': {
					DEFAULT: 'hsl(141 75.5% 48%)',
					opac: 'hsl(141 75.5% 48% / 0.227)',
				},

				fg: {
					white: 'hsl(60 100% 99.8%)',
					black: 'hsl(233 9.5% 18.6%)',
				},

				bg: {
					'logo-black': 'hsl(216 6.5% 15.1%)',
					'section-black': 'hsl(240 8.3% 9.4%)',
					'section-dark-gray': 'hsl(240 16.8% 19.8%)',
					'shadow-black': 'hsl(0 0% 5.1%)',
				},
			},
		},
	},
} satisfies Config;
