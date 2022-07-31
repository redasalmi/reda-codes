import { motion } from 'framer-motion';

import { MotionLink } from '~/components';
import { ChevronRight } from '~/components/icons';
import { useReducedAnimation } from '~/utils';
import { chevronVariants, handVariants } from '~/constant';

const MotionChevron = motion(ChevronRight);

export default function HeroInfo() {
  return (
    <>
      <div>
        <p>Hi, I&apos;m Reda Salmi</p>
        <h1 className="full-stack">A Full Stack Web Developer</h1>
        <p>
          I will help you bring your apps, websites and ideas to life while
          providing your users with a good
          <span className="text-primary"> UI/UX</span>.
        </p>
      </div>

      <div className="hero-links">
        <MotionLink
          to="#projects"
          initial="still"
          className="hero-projects-link"
          whileHover={useReducedAnimation('move')}
        >
          <span>See My Projects</span>
          <MotionChevron
            role="img"
            className="chevron"
            aria-label="right chevron"
            variants={chevronVariants}
          />
        </MotionLink>

        <MotionLink
          to="#about"
          initial="still"
          className="hero-about-link"
          whileHover={useReducedAnimation('wave')}
        >
          More About Me{' '}
          <motion.span className="hand" variants={handVariants}>
            👋
          </motion.span>
        </MotionLink>
      </div>
    </>
  );
}
