import { Logo, NavLinks, NavButtons } from '~/components/Navbar';

export default function Navbar() {
  return (
    <nav
      id="top"
      className="h-[90px] py-5 bg-bg-secondary dark:bg-bg-secondary-dark border-b-[1px] border-nav-border dark:border-nav-border-dark"
    >
      <div className="container mx-auto flex justify-between items-center h-[54px]">
        <Logo />
        <NavLinks />
        <NavButtons />
      </div>
    </nav>
  );
}
