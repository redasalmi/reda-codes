import { Link } from 'remix';
import { motion } from 'framer-motion';

import { ChevronRight } from '~/components/icons';
import { chevronVariants, handVariants } from '~/constant';

const MotionLink = motion(Link);
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
          <span className="text-highlight"> UI/UX</span>.
        </p>
      </div>

      <div className="hero-links">
        <MotionLink
          to="#projects"
          initial="still"
          whileHover="move"
          className="hero-projects-link"
        >
          <span>See My Projects</span>
          <MotionChevron className="chevron" variants={chevronVariants} />
        </MotionLink>

        <MotionLink
          to="#about"
          initial="still"
          whileHover="wave"
          className="hero-about-link"
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
