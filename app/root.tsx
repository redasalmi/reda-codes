import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { MotionConfig } from 'framer-motion';

import { ThemeScript, Fonts, Navbar, Footer, ScrollUp } from '~/components';
import styles from '~/tailwind.css';

import type { LinksFunction, MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    title: 'Reda Salmi Portfolio',
    viewport: 'width=device-width,initial-scale=1',
    description:
      'Reda Salmi personal website with projects, skills and contact informations.',
    'twitter:card': 'summary',
    'twitter:site': '@redsalmi',
    'twitter:creator': '@redsalmi',
    'og:title': 'Reda Salmi Portfolio',
    'og:description':
      'Reda Salmi personal website with projects, skills and contact informations',
    'og:type': 'website',
    'og:url': 'https://redacodes.com',
    'og:image': 'https://redacodes.com/preview.jpg',
    'og:image:width': '1190',
    'og:image:height': '750',
  };
};

export const links: LinksFunction = () => {
  return [
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
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <ThemeScript />
        <Fonts />
        <Links />
      </head>
      <body id="top" tabIndex={-1}>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <Outlet />
          <ScrollUp />
          <Footer />
        </MotionConfig>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
