import * as React from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

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
  return (
    <motion.path
      d={d}
      initial="hide"
      clipPath={clipPath}
      variants={pathVariants}
      strokeWidth={strokeWidth}
      custom={{ duration, delay }}
      animate={startDraw ? 'show' : undefined}
      onAnimationComplete={onAnimationComplete}
    />
  );
}

export default function LogoAnimation() {
  const [startDraw, setStartDraw] = React.useState(false);
  const logoDivRef = React.useRef<HTMLDivElement>(null!);
  const controls = useAnimation();
  const perspective = useMotionValue(0);

  const startPerspectiveAnim = () => {
    logoDivRef.current.classList.add('logo-animation-bg');
    controls.start('perspective');
  };

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
        boxShadow: `${-rotateY}px 70px 40px -20px var(--shadow-primary)`,
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
      variants={logoBgVariants}
      viewport={{ once: true, amount: 'all' }}
      onViewportEnter={() => setStartDraw(true)}
      style={{ perspective }}
      className="logo-animation"
      onMouseMove={handleMouseEvent}
      onHoverEnd={handleMouseLeave}
    >
      <svg
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
                index === paths.length - 1 ? startPerspectiveAnim : undefined
              }
              {...clip}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
