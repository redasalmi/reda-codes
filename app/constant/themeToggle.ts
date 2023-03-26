import type { Variants } from 'framer-motion';

const transition = {
	duration: 0.4,
};

export const themeVariants: Variants = {
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
