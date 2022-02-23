const transition = {
  duration: 0.1,
};

export const scrollUpVariants = {
  hide: {
    opacity: 0,
    pointerEvents: 'none' as const,
    transition,
  },
  show: {
    opacity: 1,
    pointerEvents: 'auto' as const,
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
