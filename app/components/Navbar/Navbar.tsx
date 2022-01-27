import Logo from '~/components/Navbar/Logo';
import NavLinks from '~/components/Navbar/NavLinks';
import Icons from '~/components/Navbar/Icons';
import MobileMenu from '~/components/Navbar/MobileMenu';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <Logo />
        <NavLinks />
        <Icons />
        <MobileMenu />
      </div>
    </nav>
  );
}
