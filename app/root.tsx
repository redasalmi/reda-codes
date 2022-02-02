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
import Projects from '~/components/Projects';
import Skills from '~/components/Skills';
import About from '~/components/About';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import ScrollUp from '~/components/ScrollUp';

import { getuserTheme, setUserTheme } from '~/cookies';
import { META, LINKS } from '~/constant';
import type { ThemeData } from '~/types';

export const meta: MetaFunction = () => META;

export const links: LinksFunction = () => LINKS;

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
      <body id="home" className={theme}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
        <ScrollUp />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
