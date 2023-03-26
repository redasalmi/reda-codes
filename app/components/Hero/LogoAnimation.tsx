import * as React from 'react';
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';

import useReducedAnimation from '~/hooks/useReducedAnimation';
import { clamp } from '~/utils';
import {
  logoBgVariants,
  pathVariants,
  clips,
  paths,
  logoBgInit,
} from '~/constant';

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
      className="motion-reduce:logo-svg-path motion-reduce:opacity-100"
    />
  );
}

export default function LogoAnimation() {
  const [hasFinishedDrawing, setHasFinishedDrawing] = React.useState(false);
  const logoDivRef = React.useRef<HTMLDivElement>(null!);

  const controls = useAnimationControls();
  const pathsControls = useAnimationControls();
  const isInView = useInView(logoDivRef, { once: true, amount: 0.9 });

  const scale = useMotionValue(logoBgInit.scale);
  const z = useMotionValue(logoBgInit.z);
  const rotateY = useMotionValue(logoBgInit.rotateY);
  const boxShadow = useMotionTemplate`${-rotateY.get()}px 70px 40px -20px var(--element-shadow)`;

  const style = {
    z,
    scale,
    ...(hasFinishedDrawing
      ? {
          rotateY,
          boxShadow,
        }
      : undefined),
  };

  if (isInView) {
    pathsControls.start('show').then(async () => {
      logoDivRef.current.classList.add('bg-white', 'dark:bg-bg-logo-black');
      await controls.start('scale');
      await controls.start('rotate');
      setHasFinishedDrawing(true);
    });
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (hasFinishedDrawing) {
      controls.stop();
      const { x, width } = logoDivRef.current.getBoundingClientRect();
      const logoDivCenter = (width + x * 2) / 2;

      let newRotateY = (event.clientX - logoDivCenter) / 6;
      newRotateY = clamp(newRotateY, -35, 35);
      rotateY.set(newRotateY);
    }
  };

  const handleMouseLeave = () => {
    if (hasFinishedDrawing) {
      controls.start('hoverReset');
    }
  };

  return (
    <div className="md:w-1/2 xl:w-[45%]">
      <motion.div
        style={style}
        ref={logoDivRef}
        variants={logoBgVariants}
        animate={useReducedAnimation(controls)}
        onMouseMove={useReducedAnimation(handleMouseMove)}
        onHoverEnd={useReducedAnimation(handleMouseLeave)}
        className="transform-preserve-3d motion-reduce:rotate-logo rounded-[20px] py-10 shadow-dark-gray motion-reduce:bg-white motion-reduce:shadow-[27px_70px_40px_-20px] dark:shadow-bg-shadow-black motion-reduce:dark:bg-bg-logo-black md:-mr-5 lg:py-[60px]"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-slate-blue"
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
    </div>
  );
}
