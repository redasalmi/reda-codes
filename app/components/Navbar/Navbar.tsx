import { Logo, NavLinks, NavButtons } from '~/components/Navbar';

export default function Navbar() {
	return (
		<nav className="h-[90px] border-b-[1px] border-light-gray bg-white py-5 dark:border-dim-gray dark:bg-bg-section-dark-gray">
			<div className="container mx-auto flex h-[54px] items-center justify-between px-4">
				<Logo />
				<NavLinks />
				<NavButtons />
			</div>
		</nav>
	);
}
