import * as React from 'react';
import { motion, useAnimationControls, useMotionValue } from 'framer-motion';

import { clamp, useReducedAnimation } from '~/utils';
import { logoBgVariants, pathVariants, clips, paths } from '~/constant';

import type { AnimationControls } from 'framer-motion';

interface MotionPathProps {
  d: string;
  clipPath: string;
  strokeWidth: number;
  duration: number;
  delay: number;
  controls: AnimationControls;
}

function MotionPath({
  d,
  clipPath,
  strokeWidth,
  duration,
  delay,
  controls,
}: MotionPathProps) {
  return (
    <motion.path
      d={d}
      initial="hide"
      clipPath={clipPath}
      variants={pathVariants}
      strokeWidth={strokeWidth}
      custom={{ duration, delay }}
      animate={useReducedAnimation(controls)}
    />
  );
}

export default function LogoAnimation() {
  const logoDivRef = React.useRef<HTMLDivElement>(null!);

  const controls = useAnimationControls();
  const pathsControls = useAnimationControls();

  const scale = useMotionValue(logoBgVariants.init.scale);
  const z = useMotionValue(logoBgVariants.init.z);

  const showLogo = async () => {
    await pathsControls.start('show');
    logoDivRef.current.classList.add('logo-animation-bg');
    await controls.start('scale');
    await controls.start('rotate');
    logoDivRef.current.classList.add('logo-drawed');
  };

  const hasFinishedDrawing = () =>
    logoDivRef.current.classList.contains('logo-drawed');

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (hasFinishedDrawing()) {
      const { x, width } = logoDivRef.current.getBoundingClientRect();
      const logoDivCenter = (width + x * 2) / 2;

      let rotateY = (event.clientX - logoDivCenter) / 6;
      rotateY = clamp(rotateY, -35, 35);

      controls.start(
        {
          rotateY,
          boxShadow: `${-rotateY}px 70px 40px -20px var(--shadow-primary)`,
        },
        { type: 'spring' },
      );
    }
  };

  const handleMouseLeave = () => {
    if (hasFinishedDrawing()) {
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
      onViewportEnter={useReducedAnimation(showLogo)}
    >
      <motion.svg
        role="img"
        aria-label="reda codes logo"
        className="logo-animation-svg"
        viewBox="0 0 41.097 35.452"
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
          {paths.map((clip) => (
            <MotionPath
              key={clip.clipPath}
              controls={pathsControls}
              {...clip}
            />
          ))}
        </g>
      </motion.svg>
    </motion.div>
  );
}
