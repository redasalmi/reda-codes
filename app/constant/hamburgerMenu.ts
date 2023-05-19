import type { Transition, Variants } from 'framer-motion';

const transition = {
	duration: 0.3,
};

type HamburgerBtnVariant = {
	key: string;
	transition: Transition;
	variants: Variants;
};

export const hamburgerBtnVariants: HamburgerBtnVariant[] = [
	{
		key: 'btn1',
		transition,
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
		transition,
		variants: {
			hide: { rotateZ: 0, y: 0 },
			show: { rotateZ: 45, y: -6 },
		},
	},
];

export const linksVariants: Variants = {
	hide: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		backdropFilter: 'blur(0)',
		pointerEvents: 'none',
	},
	show: {
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		backdropFilter: 'blur(4px)',
		pointerEvents: 'auto',
	},
};

export const linksListVariants: Variants = {
	init: { x: '110%' },
	hide: { x: '110%', transition },
	show: { x: 0, transition },
};
