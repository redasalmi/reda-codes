import { motion } from 'framer-motion';

import { MotionLink } from '~/components';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { chevronVariants, handVariants } from '~/constant';
import chevronRight from '~/assets/icons/chevron-right.svg';

export default function HeroInfo() {
	return (
		<div className="md:w-1/2 md:py-10 lg:py-[60px] lg:text-[1.2rem] xl:py-20">
			<div>
				<p>Hi, I&apos;m Reda Salmi</p>
				<h1 className="text-[1.8rem] font-bold md:text-2xl lg:text-[2rem] lg:leading-normal xl:text-[2.4rem] xl:leading-loose">
					A Full Stack Web Developer
				</h1>
				<p>
					I will help you bring your apps, websites and ideas to life while
					providing your users with a good
					<span className="font-bold text-chocolate dark:text-dark-orange">
						{' '}
						UI/UX
					</span>
					.
				</p>
			</div>

			<div className="lg:mt-5 xl:mt-[30px] xl:flex xl:gap-[15px]">
				<MotionLink
					to="#projects"
					initial="still"
					className="mt-[10px] flex h-14 w-[200px] items-center justify-center rounded-3xl bg-slate-blue px-6 py-3 text-center font-bold leading-none text-fg-white sm:w-[250px]"
					whileHover={useReducedAnimation('move')}
				>
					<span>See My Projects</span>
					<motion.img
						alt="right chevron"
						src={chevronRight}
						className="inline-block h-6 w-6"
						variants={chevronVariants}
					/>
				</MotionLink>

				<MotionLink
					to="#about"
					initial="still"
					className="mt-[10px] flex h-14 w-[200px] items-center justify-center rounded-3xl border-2 border-slate-blue px-6 py-3 text-center font-bold leading-none text-fg-black dark:text-fg-white sm:w-[250px]"
					whileHover={useReducedAnimation('wave')}
				>
					More About Me{' '}
					<motion.span className="inline-block pl-1" variants={handVariants}>
						👋
					</motion.span>
				</MotionLink>
			</div>
		</div>
	);
}
