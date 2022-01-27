import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
  ActionFunction,
} from 'remix';

import Navbar from '~/components/Navbar';
import Hero from '~/components/Hero';

import { getuserTheme, setUserTheme } from '~/cookies';
import type { ThemeData } from '~/types';

import globalStyles from '~/styles/global.css';
import navbarStyles from '~/styles/components/navbar.css';
import heroStyles from '~/styles/components/hero.css';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export const links: LinksFunction = () => [
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
    href: navbarStyles,
  },
  {
    rel: 'stylesheet',
    href: heroStyles,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  return getuserTheme(request.headers);
};

export const action: ActionFunction = async ({ request }) => {
  return setUserTheme(request);
};

export default function App() {
  const { theme } = useLoaderData<ThemeData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={theme}>
        <Navbar />
        <Hero />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
