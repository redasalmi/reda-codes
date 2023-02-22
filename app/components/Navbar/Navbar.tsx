import { Section } from '~/components';
import { Logo, NavLinks, NavButtons } from '~/components/Navbar';

export default function Navbar() {
  return (
    <Section
      id="top"
      type="nav"
      className="h-[90px] py-5 bg-bg-secondary dark:bg-bg-secondary-dark border-b-[1px] border-nav-border dark:border-nav-border-dark"
      containerclassName="flex justify-between items-center h-[54px]"
    >
      <Logo />
      <NavLinks />
      <NavButtons />
    </Section>
  );
}
