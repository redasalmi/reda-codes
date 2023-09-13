import { Link } from '@remix-run/react';
import { useAnimate, useMotionValueEvent, useScroll } from 'framer-motion';

import { scrollUpTransition, scrollUpVariants } from '~/constant';
import arrowUp from '~/assets/icons/arrow-up.svg';

export default function ScrollUp() {
	const [linkRef, animate] = useAnimate();
	const { scrollYProgress } = useScroll();

	const checkLinkVisibility = (value: number) => {
		const isHidden = linkRef.current.style.opacity !== '1';

		if (isHidden && value > 0.4) {
			animate(linkRef.current, scrollUpVariants.show, scrollUpTransition);
		} else if (!isHidden && value < 0.4) {
			animate(linkRef.current, scrollUpVariants.hide, scrollUpTransition);
		}
	};

	useMotionValueEvent(scrollYProgress, 'change', checkLinkVisibility);

	return (
		<Link
			to="#top"
			ref={linkRef}
			id="scroll-up"
			className="pointer-events-none fixed bottom-[10px] right-[10px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-royal-blue opacity-0 dark:bg-lime-green"
		>
			<img
				src={arrowUp}
				alt="Back to top"
				className="h-[19px] w-[19px] stroke-fg-white"
			/>
		</Link>
	);
}
