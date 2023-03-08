import { Section } from '~/components';
import { HeroInfo, LogoAnimation } from '~/components/Hero';

export default function Hero() {
  return (
    <Section
      className="bg-bg-primary pt-[60px] pb-20 dark:bg-bg-primary-dark md:py-20 lg:py-[120px]"
      containerclassName="flex flex-col gap-5 md:flex-row xl:justify-between"
    >
      <div className="md:w-1/2 md:py-10 lg:py-[60px] lg:text-[1.2rem] xl:py-20">
        <HeroInfo />
      </div>

      <div className="md:w-1/2 xl:w-[45%]">
        <LogoAnimation />
      </div>
    </Section>
  );
}
