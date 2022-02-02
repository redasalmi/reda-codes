export const hamburgerBtnVariants = [
  {
    key: 'btn1',
    transition: { duration: 0.3 },
    variants: {
      open: { rotateZ: 0, y: 0 },
      close: { rotateZ: -45, y: 4 },
    },
  },
  {
    key: 'btn2',
    transition: { duration: 0.1 },
    variants: {
      open: { opacity: 1 },
      close: { opacity: 0 },
    },
  },
  {
    key: 'btn3',
    transition: { duration: 0.3 },
    variants: {
      open: { rotateZ: 0, y: 0 },
      close: { rotateZ: 45, y: -6 },
    },
  },
];

export const linksVariants = {
  slideLeft: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)',
    pointerEvents: 'auto' as const,
  },
  slideRight: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backdropFilter: 'blur(0)',
    pointerEvents: 'none' as const,
  },
};

export const linksListVariants = {
  init: { x: '110%' },
  slideLeft: { x: 0 },
  slideRight: { x: '110%' },
};
