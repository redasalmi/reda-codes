import * as React from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

import { LOGO_DIV_VARIANTS, CLIPS, PATHS } from '~/constant';

interface MotionPathProps {
  d: string;
  clipPath: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  onAnimationComplete?: () => void;
}

function MotionPath({
  d,
  clipPath,
  strokeWidth,
  duration,
  delay,
  onAnimationComplete,
}: MotionPathProps) {
  return (
    <motion.path
      d={d}
      clipPath={clipPath}
      strokeWidth={strokeWidth}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { type: 'spring', duration, bounce: 0, delay },
        opacity: { duration: 0.01, delay },
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
}

export default function LogoAnimation() {
  const logoDivRef = React.useRef<HTMLDivElement>(null!);
  const controls = useAnimation();
  const perspective = useMotionValue(0);

  const startPerspectiveAnim = () => controls.start('perspective');

  const handleMouseEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (perspective.get() === 750) {
      const { x, width } = logoDivRef.current.getBoundingClientRect();
      const logoDivCenter = (width + x * 2) / 2;

      let rotateY = (event.clientX - logoDivCenter) / 6;
      if (rotateY > 35) {
        rotateY = 35;
      } else if (rotateY < -35) {
        rotateY = -35;
      }

      controls.start({
        rotateY,
        boxShadow: `${-rotateY}px 70px 40px -20px var(--logo-shadow)`,
      });
    }
  };

  const handleMouseLeave = () => {
    if (perspective.get() === 750) {
      controls.start('hoverReset');
    }
  };

  return (
    <motion.div
      ref={logoDivRef}
      animate={controls}
      variants={LOGO_DIV_VARIANTS}
      style={{ perspective }}
      className="logo-animation"
      onMouseMove={handleMouseEvent}
      onHoverEnd={handleMouseLeave}
    >
      <motion.svg
        className="logo-animation-svg"
        viewBox="0 0 41.097 35.452"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {CLIPS.map(({ id, d }) => (
            <clipPath key={id} id={id}>
              <path d={d} />
            </clipPath>
          ))}
        </g>

        <g
          fill="none"
          stroke="var(--highlight)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {PATHS.map((clip, index) => (
            <MotionPath
              key={clip.clipPath}
              onAnimationComplete={
                index === PATHS.length - 1 ? startPerspectiveAnim : undefined
              }
              {...clip}
            />
          ))}
        </g>
      </motion.svg>
    </motion.div>
  );
}
