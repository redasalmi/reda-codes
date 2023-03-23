import { motion } from 'framer-motion';

import { MotionLink } from '~/components';
import { ChevronRight } from '~/components/Icons';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { chevronVariants, handVariants } from '~/constant';

const MotionChevron = motion(ChevronRight);

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
          <span className="font-bold text-primary dark:text-primary-dark">
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
          className="mt-[10px] flex h-14 w-[200px] items-center justify-center rounded-3xl bg-violet py-3 px-6 text-center font-bold leading-none text-white sm:w-[250px]"
          whileHover={useReducedAnimation('move')}
        >
          <span>See My Projects</span>
          <MotionChevron
            role="img"
            className="inline-block h-5 w-5"
            aria-label="right chevron"
            variants={chevronVariants}
          />
        </MotionLink>

        <MotionLink
          to="#about"
          initial="still"
          className="mt-[10px] flex h-14 w-[200px] items-center justify-center rounded-3xl border-2 border-violet py-3 px-6 text-center font-bold leading-none text-fg-primary dark:text-fg-primary-dark sm:w-[250px]"
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
