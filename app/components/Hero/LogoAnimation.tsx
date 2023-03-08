import * as React from 'react';
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionValue,
} from 'framer-motion';

import useReducedAnimation from '~/hooks/useReducedAnimation';
import { clamp } from '~/utils';
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
      className="motion-reduce:logo-svg-path opacity-100"
    />
  );
}

export default function LogoAnimation() {
  const logoDivRef = React.useRef<HTMLDivElement>(null!);

  const controls = useAnimationControls();
  const pathsControls = useAnimationControls();
  const isInView = useInView(logoDivRef, { once: true, amount: 0.9 });

  const scale = useMotionValue(logoBgVariants.init.scale);
  const z = useMotionValue(logoBgVariants.init.z);

  if (isInView) {
    pathsControls.start('show').then(async () => {
      logoDivRef.current.classList.add('bg-bg-logo', 'dark:bg-bg-logo-dark');
      await controls.start('scale');
      await controls.start('rotate');
      logoDivRef.current.classList.add('logo-drawed');
    });
  }

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
      style={{ z, scale }}
      animate={useReducedAnimation(controls)}
      onMouseMove={useReducedAnimation(handleMouseMove)}
      onHoverEnd={useReducedAnimation(handleMouseLeave)}
      className="transform-preserve-3d motion-reduce:rotate-logo rounded-[20px] py-10 motion-reduce:bg-bg-logo motion-reduce:shadow-[27px_70px_40px_-20px_var(--shadow-primary)] motion-reduce:dark:bg-bg-logo-dark md:-mr-5 lg:py-[60px]"
    >
      <motion.svg
        role="img"
        viewBox="0 0 41.097 35.452"
        aria-label="reda codes logo"
        className="m-auto block h-full w-[250px] origin-center sm:w-[300px] md:w-[250px] lg:w-[275px]"
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
