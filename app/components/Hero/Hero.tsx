import HeroInfo from '~/components/Hero/HeroInfo';
import LogoAnimation from '~/components/Hero/LogoAnimation';

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-info">
        <HeroInfo />
      </div>

      <div>
        <LogoAnimation />
      </div>
    </section>
  );
}
