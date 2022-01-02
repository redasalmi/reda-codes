import {
  Links,
  LiveReload,
  Meta,
  Outlet,
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
import { getuserTheme, toggleUserTheme } from '~/cookies';

import globalStyles from '~/styles/global.css';

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
];

export const loader: LoaderFunction = async ({ request }) => {
  return getuserTheme(request.headers);
};

export const action: ActionFunction = async ({ request }) => {
  return toggleUserTheme(request);
};

export default function App() {
  const theme = useLoaderData<string>();

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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
