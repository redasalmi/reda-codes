import type { LinksFunction } from 'remix';

import Hero from '~/components/Hero';
import Projects from '~/components/Projects';
import Skills from '~/components/Skills';
import About from '~/components/About';
import Contact from '~/components/Contact';

import homeStyles from '~/styles/home.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: homeStyles,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
