export const hamburgerBtnAnimations = [
	{
		selector: 'span:first-child',
		hide: { rotateZ: 0, y: 0 },
		show: { rotateZ: -45, y: 4 },
	},
	{
		selector: 'span:nth-child(2)',
		hide: { opacity: 1 },
		show: { opacity: 0 },
	},
	{
		selector: 'span:last-child',
		hide: { rotateZ: 0, y: 0 },
		show: { rotateZ: 45, y: -6 },
	},
];

export const linksVariants = {
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

export const linksListVariants = {
	hide: { x: '100vw' },
	show: { x: 0 },
};

export const hamMenuTransition = {
	duration: 0.3,
};
