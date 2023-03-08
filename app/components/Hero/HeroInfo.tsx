import { motion } from 'framer-motion';

import { MotionLink } from '~/components';
import { ChevronRight } from '~/components/Icons';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { chevronVariants, handVariants } from '~/constant';

const MotionChevron = motion(ChevronRight);

export default function HeroInfo() {
  return (
    <>
      <div>
        <p>Hi, I&apos;m Reda Salmi</p>
        <h1 className="text-[1.8rem] md:text-2xl lg:text-[2rem] lg:leading-normal xl:text-[2.4rem] xl:leading-loose">
          A Full Stack Web Developer
        </h1>
        <p>
          I will help you bring your apps, websites and ideas to life while
          providing your users with a good
          <span className="font-bold text-primary-col dark:text-primary-col-dark">
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
          className="mt-[10px] flex w-[200px] items-center justify-center rounded-3xl bg-violet-col py-3 px-6 text-center font-bold text-white-col sm:w-[250px]"
          whileHover={useReducedAnimation('move')}
        >
          <span>See My Projects</span>
          <MotionChevron
            role="img"
            className="inline-block md:h-5 md:w-5"
            aria-label="right chevron"
            variants={chevronVariants}
          />
        </MotionLink>

        <MotionLink
          to="#about"
          initial="still"
          className="mt-[10px] flex w-[200px] items-center justify-center rounded-3xl border-2 border-violet-col py-3 px-6 text-center font-bold text-fg-primary dark:text-fg-primary-dark sm:w-[250px]"
          whileHover={useReducedAnimation('wave')}
        >
          More About Me{' '}
          <motion.span className="inline-block" variants={handVariants}>
            👋
          </motion.span>
        </MotionLink>
      </div>
    </>
  );
}
