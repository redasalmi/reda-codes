import { motion, useReducedMotion } from 'framer-motion';

import { MotionLink } from '~/components';
import { ChevronRight } from '~/components/icons';
import { chevronVariants, handVariants } from '~/constant';

const MotionChevron = motion(ChevronRight);

export default function HeroInfo() {
  const shouldReduceMotion = useReducedMotion();

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
          whileHover={shouldReduceMotion ? undefined : 'move'}
        >
          <span>See My Projects</span>
          <MotionChevron
            className="chevron"
            aria-label="right chevron"
            variants={chevronVariants}
          />
        </MotionLink>

        <MotionLink
          to="#about"
          initial="still"
          className="hero-about-link"
          whileHover={shouldReduceMotion ? undefined : 'wave'}
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
