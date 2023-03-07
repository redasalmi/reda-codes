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

      <div className="lg:mt-5 xl:flex xl:mt-[30px] xl:gap-[15px]">
        <MotionLink
          to="#projects"
          initial="still"
          className="rounded-3xl py-3 px-6 w-[200px] mt-[10px] font-bold text-center flex items-center justify-center text-white-col bg-violet-col sm:w-[250px]"
          whileHover={useReducedAnimation('move')}
        >
          <span>See My Projects</span>
          <MotionChevron
            role="img"
            className="inline-block md:w-5 md:h-5"
            aria-label="right chevron"
            variants={chevronVariants}
          />
        </MotionLink>

        <MotionLink
          to="#about"
          initial="still"
          className="rounded-3xl py-3 px-6 w-[200px] mt-[10px] font-bold text-center flex items-center justify-center text-fg-primary dark:text-fg-primary-dark border-2 border-violet-col sm:w-[250px]"
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
