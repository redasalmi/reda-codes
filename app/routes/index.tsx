import type { LinksFunction } from '@remix-run/node';

import { Hero, Projects, Skills, About, Contacts } from '~/components';
import { projects, skills, contacts } from '~/constant';
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
      <Projects projects={projects} />
      <Skills skills={skills} />
      <About />
      <Contacts contacts={contacts} />
    </main>
  );
}
