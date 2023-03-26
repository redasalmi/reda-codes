import type { Variants } from 'framer-motion';

export const chevronVariants: Variants = {
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

export const handVariants: Variants = {
	still: {
		rotateZ: 0,
	},
	wave: {
		rotateZ: [0, 40],
		transition: {
			duration: 0.6,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
};
