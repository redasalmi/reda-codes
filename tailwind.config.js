/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      white: 'hsl(60 100% 100%)',
      black: 'hsl(240 8% 9%)',
      violet: 'hsl(250 80% 60%)',
      'bg-primary': {
        DEFAULT: 'hsl(228 33% 97%)',
        dark: 'hsl(240 8% 9%)',
      },
      'bg-secondary': {
        DEFAULT: 'hsl(0 0% 100%)',
        dark: 'hsl(240 17% 20%)',
      },
      'bg-logo': {
        DEFAULT: 'hsl(0 0% 100%)',
        dark: 'hsl(216 6% 15%)',
      },
      'fg-primary': {
        DEFAULT: 'hsl(233 9% 19%)',
        dark: 'hsl(60 100% 100%)',
      },
      primary: {
        DEFAULT: 'hsl(31 100% 34%)',
        dark: 'hsl(32 100% 51%)',
      },
      secondary: {
        DEFAULT: 'hsl(211 100% 34%)',
        dark: 'hsl(141 76% 48%)',
      },
      'secondary-opac': {
        DEFAULT: 'hsl(211 100% 34% / 22.75%)',
        dark: 'hsl(141 76% 48% / 22.75%)',
      },
      'nav-border': {
        DEFAULT: 'hsl(228 6% 83%)',
        dark: 'hsl(0 0% 32%)',
      },
      'shadow-primary': {
        DEFAULT: 'hsl(0 0% 69%)',
        dark: 'hsl(0 0% 5%)',
      },
    },
  },
};
