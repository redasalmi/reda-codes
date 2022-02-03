import Section from '~/components/Section';
import Logo from '~/components/Navbar/Logo';
import NavLinks from '~/components/Navbar/NavLinks';
import NavButtons from '~/components/Navbar/NavButtons';

export default function Navbar() {
  return (
    <Section type="nav" className="nav">
      <Logo />
      <NavLinks />
      <NavButtons />
    </Section>
  );
}
