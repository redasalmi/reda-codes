import Logo from '~/components/Navbar/Logo';
import NavLinks from '~/components/Navbar/NavLinks';
import NavButtons from '~/components/Navbar/NavButtons';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <Logo />
        <NavLinks />
        <NavButtons />
      </div>
    </nav>
  );
}
