import * as React from 'react';
import {
	useAnimationControls,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';

import { MotionLink } from '~/components';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { scrollUpVariants } from '~/constant';
import arrowUp from '~/assets/icons/arrow-up.svg';

export default function ScrollUp() {
	const controls = useAnimationControls();
	const { scrollYProgress } = useScroll();
	const linkRef = React.useRef<HTMLAnchorElement>(null!);

	const checkLinkVisibility = (value: number) => {
		const isHidden = linkRef.current.style.opacity !== '1';

		if (isHidden && value > 0.4) {
			controls.start('show');
		} else if (!isHidden && value < 0.4) {
			controls.start('hide');
		}
	};

	useMotionValueEvent(scrollYProgress, 'change', checkLinkVisibility);

	return (
		<MotionLink
			to="#top"
			ref={linkRef}
			initial="hide"
			id="scroll-up"
			animate={controls}
			variants={scrollUpVariants}
			whileHover={useReducedAnimation('pulse')}
			className="fixed bottom-[10px] right-[10px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-royal-blue dark:bg-lime-green"
		>
			<img
				src={arrowUp}
				alt="Back to top"
				className="h-[19px] w-[19px] stroke-fg-white"
			/>
		</MotionLink>
	);
}
