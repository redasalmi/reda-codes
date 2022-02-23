import { Section } from '~/components';
import { Logo, NavLinks, NavButtons } from '~/components/Navbar';

export default function Navbar() {
  return (
    <Section type="nav" id="top" className="nav">
      <Logo />
      <NavLinks />
      <NavButtons />
    </Section>
  );
}
