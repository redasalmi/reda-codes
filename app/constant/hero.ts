export const chevronVariants = {
  still: {
    x: 0,
  },
  move: {
    x: [0, 5, 0, -5, 0],
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const handVariants = {
  still: {
    rotateZ: 0,
  },
  wave: {
    rotateZ: [0, 40],
    transition: {
      duration: 0.6,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};
