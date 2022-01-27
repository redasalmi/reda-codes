import HeroInfo from '~/components/HeroInfo';
import LogoAnimation from '~/components/LogoAnimation';

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
