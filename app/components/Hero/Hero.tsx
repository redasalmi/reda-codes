import HeroInfo from '~/components/Hero/HeroInfo';
import LogoAnimation from '~/components/Hero/LogoAnimation';
import ScrollDown from '~/components/Hero/ScrollDown';

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-info">
        <HeroInfo />
      </div>

      <div className="hero-logo">
        <LogoAnimation />
      </div>

      <div className="hero-scroll-down">
        <ScrollDown />
      </div>
    </section>
  );
}
