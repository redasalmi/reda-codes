import { Logo, NavLinks, NavButtons } from '~/components/Navbar';

export default function Navbar() {
  return (
    <nav className="h-[90px] border-b-[1px] border-nav-border bg-bg-secondary py-5 dark:border-nav-border-dark dark:bg-bg-secondary-dark">
      <div className="container mx-auto flex h-[54px] items-center justify-between px-4">
        <Logo />
        <NavLinks />
        <NavButtons />
      </div>
    </nav>
  );
}
