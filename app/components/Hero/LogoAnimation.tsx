import * as React from 'react';
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

import { useReducedAnimation } from '~/utils';
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
  const scale = useMotionValue(logoBgVariants.init.scale);
  const z = useMotionValue(logoBgVariants.init.z);
  const finishedRotation = () => z.get() === logoBgVariants.rotate.z;

  const invertedScale = useTransform(scale, (v) => 1 / v);
  const invertedTransform = useMotionTemplate`scale(${invertedScale})`;

  const startRotation = async () => {
    logoDivRef.current.classList.add('logo-animation-bg');
    await controls.start('scale');
    await controls.start('rotate');
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (finishedRotation()) {
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
    if (finishedRotation()) {
      controls.start('hoverReset');
    }
  };

  return (
    <motion.div
      ref={logoDivRef}
      variants={logoBgVariants}
      className="logo-animation"
      style={{ z, scale }}
      animate={useReducedAnimation(controls)}
      viewport={{ once: true, amount: 0.9 }}
      onMouseMove={useReducedAnimation(handleMouseMove)}
      onHoverEnd={useReducedAnimation(handleMouseLeave)}
      onViewportEnter={useReducedAnimation(() => setStartDraw(true))}
    >
      <motion.svg
        role="img"
        aria-label="reda codes logo"
        className="logo-animation-svg"
        viewBox="0 0 41.097 35.452"
        xmlns="http://www.w3.org/2000/svg"
        style={useReducedAnimation({ transform: invertedTransform })}
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
      </motion.svg>
    </motion.div>
  );
}
