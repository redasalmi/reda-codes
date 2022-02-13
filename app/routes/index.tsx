import Hero from '~/components/Hero';
import Projects from '~/components/Projects';
import Skills from '~/components/Skills';
import About from '~/components/About';
import Contact from '~/components/Contact';

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
