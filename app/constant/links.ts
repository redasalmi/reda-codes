import globalStyles from '~/styles/global.css';

export const links = [
  {
    rel: 'manifest',
    href: '/manifest.webmanifest',
  },
  {
    rel: 'icon',
    href: '/favicon.ico',
    sizes: 'any',
  },
  {
    rel: 'icon',
    href: '/icon.svg',
    type: 'image/svg+xml',
  },
  {
    rel: 'apple-touch-icon',
    href: '/apple-touch-icon.png',
  },
  {
    rel: 'stylesheet',
    href: globalStyles,
  },
];
