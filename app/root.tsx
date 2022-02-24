import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import { MotionConfig } from 'framer-motion';

import { getuserTheme } from '~/cookies.server';

import { Fonts, Navbar, Footer, ScrollUp } from '~/components';
import globalStyles from '~/styles/global.css';

import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import type { ThemeData } from '~/types';

export const meta: MetaFunction = () => {
  return {
    title: 'Reda Salmi Portfolio',
    description:
      'Reda Salmi personal website with projects, skills and contact informations.',
    'twitter:card': 'summary',
    'twitter:site': '@redsalmi',
    'twitter:creator': '@redsalmi',
    'og:title': 'Reda Salmi Portfolio',
    'og:description':
      'Reda Salmi personal website with projects, skills and contact informations',
    'og:type': 'website',
    'og:url': 'https://redasalmi.netlify.app/',
    'og:image': 'https://redasalmi.netlify.app/images/preview.jpg',
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
      href: globalStyles,
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  return getuserTheme(request.headers);
};

export default function App() {
  const { theme } = useLoaderData<ThemeData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Fonts />
        <Links />
      </head>
      <body className={theme}>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <Outlet />
          <Footer />
          <ScrollUp />
        </MotionConfig>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
