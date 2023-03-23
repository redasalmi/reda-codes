const colors = require('tailwindcss/colors');

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
      ...colors,
      white: '#fffffe',
      black: '#16161a',
    },
    extend: {
      colors: {
        'violet-primary': '#6246ea',

        // light theme colors
        'bg-primary': '#f5f6fa',
        'bg-secondary': '#fff',
        'bg-logo': '#fff',
        'fg-primary': '#2b2c34',
        primary: '#af5b00',
        secondary: '#0055af',
        'secondary-opac': '#0055af3a',
        'nav-border': '#d2d3d7',
        'shadow-primary': '#b0b0b0',

        // dark theme colors
        'bg-primary-dark': '#16161a',
        'bg-secondary-dark': '#2a2a3b',
        'bg-logo-dark': '#242629',
        'fg-primary-dark': '#fffffe',
        'primary-dark': '#ff8906',
        'secondary-dark': '#1ed760',
        'secondary-opac-dark': '#1ed7603a',
        'nav-border-dark': '#515151',
        'shadow-primary-dark': '#0d0d0d',
      },
    },
  },
};
