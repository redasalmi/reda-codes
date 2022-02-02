const transition = {
  duration: 0.1,
};

export const scrollUpVariants = {
  hide: {
    opacity: 0,
    transition,
  },
  show: {
    opacity: 1,
    transition,
  },
  pulse: {
    boxShadow: [
      '0px 0px 0px 0px var(--tertiary-opac)',
      '0px 0px 0px 5px var(--tertiary-opac)',
    ],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};
