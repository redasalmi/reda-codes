import type { Variants } from 'framer-motion';

const transition = {
  duration: 0.1,
};

export const scrollUpVariants: Variants = {
  hide: {
    opacity: 0,
    pointerEvents: 'none',
    transition,
  },
  show: {
    opacity: 1,
    pointerEvents: 'auto',
    transition,
  },
  pulse: {
    boxShadow: [
      '0px 0px 0px 0px var(--secondary-opac)',
      '0px 0px 0px 5px var(--secondary-opac)',
    ],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};
