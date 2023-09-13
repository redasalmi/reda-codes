import * as React from 'react';
import { useAnimate } from 'framer-motion';

import { Links, GithubLink } from '~/components/Navbar';
import {
	linksVariants,
	linksListVariants,
	hamMenuTransition,
	hamburgerBtnAnimations,
} from '~/constant';

function HamburgerBtnSpan() {
	return (
		<span className="mx-auto my-[3px] block h-[1px] w-1/2 rounded-[5px] border border-fg-black bg-fg-black dark:border-fg-white dark:bg-fg-white" />
	);
}

type HamburgerMenuProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HamburgerMenu({
	isOpen,
	setIsOpen,
}: HamburgerMenuProps) {
	const [hamburgerBtnRef, animateHamburger] = useAnimate<HTMLButtonElement>();
	const [linksRef, animateLink] = useAnimate<HTMLDivElement>();

	const updateNavbarAttributes = React.useCallback(
		async (isNavbarOpen: boolean) => {
			const links = linksRef.current;
			const hamburgerBtn = hamburgerBtnRef.current;

			if (isNavbarOpen) {
				links.style.display = 'flex';

				hamburgerBtnAnimations.forEach((element) => {
					animateHamburger(element.selector, element.show, hamMenuTransition);
				});
				animateLink(linksRef.current, linksVariants.show, hamMenuTransition);
				animateLink('ul', linksListVariants.show, hamMenuTransition);

				document.body.style.overflow = 'hidden';
				hamburgerBtn.setAttribute('aria-label', 'close navigation menu');
			} else {
				hamburgerBtnAnimations.forEach((element) => {
					animateHamburger(element.selector, element.hide, hamMenuTransition);
				});
				animateLink(linksRef.current, linksVariants.hide, hamMenuTransition);
				animateLink('ul', linksListVariants.hide, hamMenuTransition);

				document.body.style.overflow = 'initial';
				hamburgerBtn.setAttribute('aria-label', 'open navigation menu');
			}

			hamburgerBtn.setAttribute('aria-expanded', isNavbarOpen.toString());
		},
		[hamburgerBtnRef, linksRef, animateHamburger, animateLink],
	);

	const handleToggleNavbar = React.useCallback(
		(toggleNavbar?: boolean) => {
			const toggleIsOpen = toggleNavbar ?? !isOpen;
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

		const handleTabKey = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === 'tab') {
				const toggleNavbar = linksRef.current.contains(document.activeElement);
				handleToggleNavbar(toggleNavbar);
			}
		};

		window.addEventListener('keydown', handleEscapeKey);
		window.addEventListener('keyup', handleTabKey);

		return () => {
			window.removeEventListener('keydown', handleEscapeKey);
			window.removeEventListener('keyup', handleTabKey);
		};
	}, [setIsOpen, handleToggleNavbar, linksRef]);

	const handleClickOutSide = (event: React.MouseEvent) => {
		const clickedOutsideNavbar = linksRef.current === event.target;

		if (isOpen && clickedOutsideNavbar) {
			handleToggleNavbar(false);
		}
	};

	return (
		<>
			<button
				type="button"
				ref={hamburgerBtnRef}
				aria-label="open navigation menu"
				className="m-auto block h-[45px] w-[45px] cursor-pointer rounded-full border-2 border-fg-black dark:border-fg-white"
				onClick={() => handleToggleNavbar()}
				aria-expanded={false}
				aria-controls="mobile-nav-menu"
			>
				<HamburgerBtnSpan />
				<HamburgerBtnSpan />
				<HamburgerBtnSpan />
			</button>

			<div
				ref={linksRef}
				tabIndex={-1}
				id="mobile-nav-menu"
				onClick={handleClickOutSide}
				className="pointer-events-none fixed inset-0 z-[-1] justify-end overflow-hidden blur-0 md:hidden"
			>
				<ul className="flex h-full w-full translate-x-[100vw] list-none flex-col bg-ghost-white pt-[90px] text-center dark:bg-bg-section-black sm:w-[320px] sm:text-left sm:shadow-[0_1px_3px] sm:shadow-[#4c4c4c]">
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
				</ul>
			</div>
		</>
	);
}
