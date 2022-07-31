import * as React from 'react';
import { useAnimation, useScroll } from 'framer-motion';

import { MotionLink } from '~/components';
import { ArrowUp } from '~/components/icons';
import { useReducedAnimation } from '~/utils';
import { scrollUpVariants } from '~/constant';

export default function ScrollUp() {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
