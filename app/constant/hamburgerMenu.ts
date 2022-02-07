export const hamburgerBtnVariants = [
  {
    key: 'btn1',
    transition: { duration: 0.3 },
    variants: {
      hide: { rotateZ: 0, y: 0 },
      show: { rotateZ: -45, y: 4 },
    },
  },
  {
    key: 'btn2',
    transition: { duration: 0.1 },
    variants: {
      hide: { opacity: 1 },
      show: { opacity: 0 },
    },
  },
  {
    key: 'btn3',
    transition: { duration: 0.3 },
    variants: {
      hide: { rotateZ: 0, y: 0 },
      show: { rotateZ: 45, y: -6 },
    },
  },
];

export const linksVariants = {
  hide: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backdropFilter: 'blur(0)',
    pointerEvents: 'none' as const,
  },
  show: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)',
    pointerEvents: 'auto' as const,
  },
};

const transition = {
  duration: 0.3,
};

export const linksListVariants = {
  init: { x: '110%' },
  hide: { x: '110%', transition },
  show: { x: 0, transition },
};
