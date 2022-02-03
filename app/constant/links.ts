import globalStyles from '~/styles/global.css';
import smallStyles from '~/styles/small.css';
import mediumStyles from '~/styles/medium.css';
import largeStyles from '~/styles/large.css';
import extraLargeStyles from '~/styles/extra-large.css';

export const links = [
  {
    rel: 'icon',
    href: '/favicon.ico',
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
