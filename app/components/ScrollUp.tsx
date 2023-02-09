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
    <section role="navigation" className="scroll-up-section">
      <MotionLink
        to="#top"
        ref={linkRef}
        initial="hide"
        id="scroll-up"
        animate={controls}
        variants={scrollUpVariants}
        className="scroll-up"
        aria-label="Scroll back up"
        whileHover={useReducedAnimation('pulse')}
      >
        <ArrowUp role="img" aria-labelledby="scroll-up" />
      </MotionLink>
    </section>
  );
}
