import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import { MotionConfig } from 'framer-motion';

import Fonts from '~/components/Fonts';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import ScrollUp from '~/components/ScrollUp';

import { getuserTheme } from '~/cookies';
import { metas, links as appLinks } from '~/constant';
import type { ThemeData } from '~/types';

export const meta: MetaFunction = () => metas;

export const links: LinksFunction = () => appLinks;

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
