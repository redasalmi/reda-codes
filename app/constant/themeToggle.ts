import type { Theme } from '~/types';

const transition = {
  duration: 0.1,
};

export const themeVariants = {
  sun: (theme: Theme) => ({
    opacity: theme === 'light' ? 1 : 0,
    transition,
  }),
  moon: (theme: Theme) => ({
    opacity: theme === 'dark' ? 1 : 0,
    transition,
  }),
};
