import globalStyles from '~/styles/global.css';
import smallStyles from '~/styles/small.css';
import mediumStyles from '~/styles/medium.css';
import largeStyles from '~/styles/large.css';
import extraLargeStyles from '~/styles/extra-large.css';

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
  {
    rel: 'stylesheet',
    href: smallStyles,
    media: '(min-width: 576px)',
  },
  {
    rel: 'stylesheet',
    href: mediumStyles,
    media: '(min-width: 768px)',
  },
  {
    rel: 'stylesheet',
    href: largeStyles,
    media: '(min-width: 992px)',
  },
  {
    rel: 'stylesheet',
    href: extraLargeStyles,
    media: '(min-width: 1200px)',
  },
];
