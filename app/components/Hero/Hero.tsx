import { Section } from '~/components';
import { HeroInfo, LogoAnimation } from '~/components/Hero';

export default function Hero() {
  return (
    <Section className="hero">
      <div className="hero-info">
        <HeroInfo />
      </div>

      <div className="hero-logo">
        <LogoAnimation />
      </div>
    </Section>
  );
}
