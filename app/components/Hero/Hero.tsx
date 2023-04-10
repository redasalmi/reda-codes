import { Section } from '~/components';
import { HeroInfo, LogoAnimation } from '~/components/Hero';

export default function Hero() {
	return (
		<Section
			className="bg-ghost-white pb-20 pt-[60px] dark:bg-bg-section-black md:py-20 lg:py-[120px]"
			containerclassName="flex flex-col gap-5 md:flex-row xl:justify-between"
		>
			<HeroInfo />
			<LogoAnimation />
		</Section>
	);
}
