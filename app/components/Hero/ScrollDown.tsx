import { motion } from 'framer-motion';

import MotionLink from '~/components/MotionLink';

import { scrollDownVariants } from '~/constant';

export default function ScrollDown() {
  return (
    <MotionLink
      to="#projects"
      whileHover="move"
      className="scroll-down-link"
      aria-label="scroll to projects section"
    >
      <motion.span variants={scrollDownVariants} className="scroll-down-mouse">
        <motion.span variants={scrollDownVariants} />
      </motion.span>
      <span className="scroll-down-text">Scroll</span>
    </MotionLink>
  );
}
