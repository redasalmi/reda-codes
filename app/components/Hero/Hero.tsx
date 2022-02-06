import Section from '~/components/Section';
import HeroInfo from '~/components/Hero/HeroInfo';
import LogoAnimation from '~/components/Hero/LogoAnimation';

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
