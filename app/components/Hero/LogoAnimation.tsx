import * as React from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';

import { logoBgVariants, pathVariants, clips, paths } from '~/constant';

interface MotionPathProps {
  d: string;
  clipPath: string;
  strokeWidth: number;
  startDraw: boolean;
  duration: number;
  delay: number;
  onAnimationComplete?: () => void;
}

function MotionPath({
  d,
  clipPath,
  strokeWidth,
  startDraw,
  duration,
  delay,
  onAnimationComplete,
}: MotionPathProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.path
      d={d}
      initial="hide"
      clipPath={clipPath}
      variants={pathVariants}
      strokeWidth={strokeWidth}
      custom={{ duration, delay }}
      onAnimationComplete={onAnimationComplete}
      animate={!shouldReduceMotion && startDraw ? 'show' : undefined}
    />
  );
}

export default function LogoAnimation() {
  const [startDraw, setStartDraw] = React.useState(false);
  const logoDivRef = React.useRef<HTMLDivElement>(null!);
  const controls = useAnimation();
  const z = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const startRotation = () => {
    logoDivRef.current.classList.add('logo-animation-bg');
    controls.start('rotate');
  };

  const handleMouseEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (z.get() === -250) {
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
        boxShadow: `${-rotateY}px 70px 40px -20px var(--shadow-primary)`,
      });
    }
  };

  const handleMouseLeave = () => {
    if (z.get() === -250) {
      controls.start('hoverReset');
    }
  };

  const handleViewPortEnter = () => {
    if (shouldReduceMotion) {
      return undefined;
    }

    setStartDraw(true);
  };

  const reducedAnimation = <T,>(callback: T) => {
    if (shouldReduceMotion) {
      return undefined;
    }

    return callback;
  };

  return (
    <motion.div
      style={{ z }}
      ref={logoDivRef}
      variants={logoBgVariants}
      className="logo-animation"
      animate={reducedAnimation(controls)}
      onViewportEnter={handleViewPortEnter}
      viewport={{ once: true, amount: 0.9 }}
      onMouseMove={reducedAnimation(handleMouseEvent)}
      onHoverEnd={reducedAnimation(handleMouseLeave)}
    >
      <svg
        role="img"
        aria-label="reda codes logo"
        className="logo-animation-svg"
        viewBox="0 0 41.097 35.452"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {clips.map(({ id, d }) => (
            <clipPath key={id} id={id}>
              <path d={d} />
            </clipPath>
          ))}
        </g>

        <g
          fill="none"
          stroke="var(--violet)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {paths.map((clip, index) => (
            <MotionPath
              key={clip.clipPath}
              startDraw={startDraw}
              onAnimationComplete={
                index === paths.length - 1 ? startRotation : undefined
              }
              {...clip}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
