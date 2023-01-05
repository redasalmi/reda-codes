const transition = {
  duration: 0.4,
};

export const themeVariants = {
  hide: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
    transition,
  },
  show: {
    opacity: 1,
    display: 'block',
    transition: {
      ...transition,
      delay: 0.2,
    },
  },
};
