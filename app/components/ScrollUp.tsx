import * as React from 'react';
import {
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

import { MotionLink } from '~/components';
import { ArrowUp } from '~/components/Icons';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { scrollUpVariants } from '~/constant';

export default function ScrollUp() {
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll();
  const linkRef = React.useRef<HTMLAnchorElement>(null!);

  const checkLinkVisibility = (value: number) => {
    const isHidden = linkRef.current.style.opacity !== '1';

    if (isHidden && value > 0.4) {
      controls.start('show');
    } else if (!isHidden && value < 0.4) {
      controls.start('hide');
    }
  };

  useMotionValueEvent(scrollYProgress, 'change', checkLinkVisibility);

  return (
    <section
      role="navigation"
      className="fixed right-[10px] bottom-[10px] w-[38px] h-[38px] z-10"
    >
      <MotionLink
        to="#top"
        ref={linkRef}
        initial="hide"
        id="scroll-up"
        animate={controls}
        variants={scrollUpVariants}
        aria-label="Scroll back up"
        whileHover={useReducedAnimation('pulse')}
        className="flex justify-center items-center h-full rounded-full bg-secondary-col dark:bg-secondary-col-dark"
      >
        <ArrowUp
          role="img"
          aria-labelledby="scroll-up"
          className="w-[19px] h-[19px] stroke-white-col"
        />
      </MotionLink>
    </section>
  );
}
