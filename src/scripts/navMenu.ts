import { hamburgerBtnId, mobileMenuId } from '~/constants';

class NavMenu extends HTMLElement {
	private _hamburgerBtn: HTMLButtonElement;
	private _mobileMenu: HTMLDivElement;
	private _links: NodeListOf<HTMLLIElement>;

	constructor() {
		super();

		this._hamburgerBtn = this.querySelector(`button#${hamburgerBtnId}`)!;
		this._mobileMenu = this.querySelector(`div#${mobileMenuId}`)!;
		this._links = this.querySelectorAll(`div#${mobileMenuId} ul li a`)!;

		this._handleEscapeKey = this._handleEscapeKey.bind(this);
		this._handleTabKey = this._handleTabKey.bind(this);
		this._toggleMobileMenu = this._toggleMobileMenu.bind(this);
	}

	get isOpen() {
		return this.getAttribute('data-open') === 'true';
	}

	set isOpen(open: boolean) {
		this.setAttribute('data-open', open.toString());
	}

	connectedCallback() {
		window.addEventListener('keydown', this._handleEscapeKey);
		window.addEventListener('keyup', this._handleTabKey);

		this._hamburgerBtn.addEventListener('click', () =>
			this._toggleMobileMenu(),
		);
		this._links.forEach((link) => {
			link.addEventListener('click', () => this._toggleMobileMenu());
		});
	}

	disconnectedCallback() {
		window.removeEventListener('keydown', this._handleEscapeKey);
		window.removeEventListener('keyup', this._handleTabKey);

		this._hamburgerBtn.removeEventListener('click', () =>
			this._toggleMobileMenu(),
		);
		this._links.forEach((link) => {
			link.removeEventListener('click', () => this._toggleMobileMenu());
		});
	}

	_handleEscapeKey(event: KeyboardEvent) {
		if (event.key.toLowerCase() === 'escape') {
			this._toggleMobileMenu(false);
		}
	}

	_handleTabKey(event: KeyboardEvent) {
		if (event.key.toLowerCase() === 'tab') {
			const toggleNavbar = this._mobileMenu.contains(document.activeElement);
			this._toggleMobileMenu(toggleNavbar);
		}
	}

	_toggleMobileMenu(open?: boolean) {
		const isOpen = open ?? !this.isOpen;

		if (isOpen) {
			document.body.style.overflow = 'hidden';
			this._hamburgerBtn.setAttribute('aria-label', 'close navigation menu');
		} else {
			document.body.style.overflow = 'initial';
			this._hamburgerBtn.setAttribute('aria-label', 'open navigation menu');
		}

		this.isOpen = isOpen;
		this.setAttribute('data-open', isOpen.toString());
		this._hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
	}
}

customElements.define('nav-menu', NavMenu);
