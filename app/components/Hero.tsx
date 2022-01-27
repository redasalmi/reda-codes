import { Link } from 'remix';

import { ChevronRight } from '~/components/icons';
import LogoAnimation from '~/components/LogoAnimation';

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-info">
        <div>
          <p>Hi, I&apos;m Reda Salmi</p>
          <h1 className="full-stack">A Full Stack Web Developer</h1>
          <p>
            I will help you bring your apps, websites and ideas to life while
            providing your users with a good
            <span className="text-highlight"> UI/UX</span>.
          </p>
        </div>

        <div className="hero-links">
          <Link to="#projects" className="hero-projects-link">
            <span>See My Projects</span>
            <ChevronRight className="chevron" />
          </Link>

          <Link to="#about" className="hero-about-link">
            More About Me <span className="hand">👋</span>
          </Link>
        </div>
      </div>

      <div>
        <LogoAnimation />
      </div>
    </section>
  );
}
