import * as React from 'react';
import { useAnimation, useViewportScroll } from 'framer-motion';

import MotionLink from '~/components/MotionLink';
import { ArrowUp } from '~/components/icons';

import { scrollUpVariants } from '~/constant';

export default function ScrollUp() {
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const linkRef = React.useRef<HTMLAnchorElement>(null!);

  React.useEffect(() => {
    const checkLinkVisibility = (value: number) => {
      const isHidden = linkRef.current.style.opacity !== '1';

      if (isHidden && value > 0.4) {
        controls.start('show');
      } else if (!isHidden && value < 0.4) {
        controls.start('hide');
      }
    };

    checkLinkVisibility(scrollYProgress.get());
    const unsubscribeY = scrollYProgress.onChange(checkLinkVisibility);

    return () => {
      unsubscribeY();
    };
  }, []);

  return (
    <MotionLink
      to="#home"
      ref={linkRef}
      initial="hide"
      whileHover="pulse"
      animate={controls}
      variants={scrollUpVariants}
      className="scroll-up"
      aria-label="Scroll back up"
    >
      <ArrowUp />
    </MotionLink>
  );
}
