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
import { MotionConfig } from 'framer-motion';

import Fonts from '~/components/Fonts';
import Navbar from '~/components/Navbar';
import Hero from '~/components/Hero';
import Projects from '~/components/Projects';
import Skills from '~/components/Skills';
import About from '~/components/About';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import ScrollUp from '~/components/ScrollUp';

import { getuserTheme, setUserTheme } from '~/cookies';
import { metas, links as appLinks } from '~/constant';
import type { ThemeData } from '~/types';

export const meta: MetaFunction = () => metas;

export const links: LinksFunction = () => appLinks;

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
        <Fonts />
        <Links />
      </head>
      <body className={theme}>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
          </main>
          <About />
          <Contact />
          <Footer />
          <ScrollUp />
        </MotionConfig>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
