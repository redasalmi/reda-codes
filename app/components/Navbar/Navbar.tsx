import type { LinksFunction } from 'remix';

import Logo from '~/components/Navbar/Logo';
import NavLinks from '~/components/Navbar/NavLinks';
import Icons from '~/components/Navbar/Icons';
import MobileMenu from '~/components/Navbar/MobileMenu';

import navbarStyles from '~/styles/components/navbar.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: navbarStyles,
  },
];

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
