import { atom } from 'nanostores';

export const $isNavMenuOpen = atom(false);
export const hamburgerBtnId = 'hamburgerBtn';
export const mobileMenuId = 'mobile-nav-menu';

$isNavMenuOpen.subscribe((isOpen) => {
	if (typeof window !== 'undefined') {
		const navMenu = document.querySelector('nav-menu') as HTMLElement;
		const hamburgerBtn = navMenu.querySelector(
			`button#${hamburgerBtnId}`,
		) as HTMLButtonElement;

		if (isOpen) {
			document.body.style.overflow = 'hidden';
			hamburgerBtn.setAttribute('aria-label', 'close navigation menu');
		} else {
			document.body.style.overflow = 'initial';
			hamburgerBtn.setAttribute('aria-label', 'open navigation menu');
		}

		navMenu.setAttribute('data-open', isOpen.toString());
		hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
	}
});
