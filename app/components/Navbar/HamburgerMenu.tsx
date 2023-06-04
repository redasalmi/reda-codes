import * as React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import { Links, GithubLink } from '~/components/Navbar';
import {
	hamburgerBtnVariants,
	linksVariants,
	linksListVariants,
} from '~/constant';

type HamburgerMenuProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HamburgerMenu({
	isOpen,
	setIsOpen,
}: HamburgerMenuProps) {
	const controls = useAnimationControls();
	const hamburgerBtnRef = React.useRef<HTMLButtonElement>(null!);
	const linksRef = React.useRef<HTMLDivElement>(null!);

	const updateNavbarAttributes = React.useCallback(
		async (isNavbarOpen: boolean) => {
			const links = linksRef.current;
			const hamburgerBtn = hamburgerBtnRef.current;

			if (isNavbarOpen) {
				links.style.display = 'flex';
			}
			await controls.start(isNavbarOpen ? 'show' : 'hide');
			if (!isNavbarOpen) {
				links.style.display = 'none';
			}

			document.body.style.overflow = isNavbarOpen ? 'hidden' : 'initial';
			hamburgerBtn.setAttribute(
				'aria-label',
				isNavbarOpen ? 'close navigation menu' : 'open navigation menu',
			);
			hamburgerBtn.setAttribute('aria-expanded', isNavbarOpen.toString());
		},
		[controls],
	);

	const handleToggleNavbar = React.useCallback(
		(toggleNavbar?: boolean) => {
			const toggleIsOpen = toggleNavbar || !isOpen;
			setIsOpen(toggleIsOpen);
			updateNavbarAttributes(toggleIsOpen);
		},
		[isOpen, setIsOpen, updateNavbarAttributes],
	);

	React.useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === 'escape') {
				handleToggleNavbar(false);
			}
		};

		window.addEventListener('keydown', handleEscapeKey);

		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
		};
	}, [setIsOpen, handleToggleNavbar]);

	const handleClickOutSide = (event: React.MouseEvent) => {
		const clickedOutsideNavbar = linksRef.current === event.target;

		if (isOpen && clickedOutsideNavbar) {
			handleToggleNavbar(false);
		}
	};

	return (
		<>
			<motion.button
				type="button"
				animate={controls}
				ref={hamburgerBtnRef}
				aria-label="open navigation menu"
				className="m-auto block h-[45px] w-[45px] cursor-pointer rounded-full border-2 border-fg-black dark:border-fg-white"
				onClick={() => handleToggleNavbar()}
				aria-expanded={false}
				aria-controls="mobile-nav-menu"
			>
				{hamburgerBtnVariants.map(({ key, variants, transition }) => (
					<motion.span
						key={key}
						variants={variants}
						transition={transition}
						className="mx-auto my-[3px] block h-[1px] w-1/2 rounded-[5px] border border-fg-black bg-fg-black dark:border-fg-white dark:bg-fg-white"
					/>
				))}
			</motion.button>

			<motion.div
				tabIndex={-1}
				ref={linksRef}
				initial="init"
				animate={controls}
				id="mobile-nav-menu"
				onClick={handleClickOutSide}
				variants={linksVariants}
				className="pointer-events-none fixed inset-0 z-[-1] hidden justify-end overflow-hidden md:hidden"
			>
				<motion.ul
					variants={linksListVariants}
					className="flex h-full w-full translate-x-[110%] list-none flex-col bg-ghost-white pt-[90px] text-center dark:bg-bg-section-black sm:w-[320px] sm:text-left sm:shadow-[0_1px_3px] sm:shadow-[#4c4c4c]"
				>
					<Links
						onClick={() => handleToggleNavbar()}
						linkClassName="text-[1.1rem] font-bold block py-5 border-t border-[#4c4c4c] hover:text-primary hover:dark:text-primary-dark sm:px-[54px] sm:text-[1.1rem]"
					/>

					<li className="border-t border-[#4c4c4c] py-5 md:hidden">
						<GithubLink
							onClick={() => handleToggleNavbar()}
							linkClassName="m-auto w-[70%] text-[1.2rem] rounded-3xl py-3 px-1 flex items-center justify-center text-fg-black dark:text-fg-white font-bold border-2 border-slate-blue sm:text-base sm:w-[80%]"
							svgClassName="w-[25px] h-[25px] ml-[10px]"
						>
							<span>Check out my github</span>
						</GithubLink>
					</li>
				</motion.ul>
			</motion.div>
		</>
	);
}
