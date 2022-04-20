import type { LinksFunction } from '@remix-run/node';

import { Hero, Projects, Skills, About, Contact } from '~/components';
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
