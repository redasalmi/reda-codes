import { useLoaderData, Link } from 'remix';
import type { LinksFunction } from 'remix';
import type { Theme } from '~/types';

import ThemeToggle from '~/components/ThemeToggle';
import GithubLink from '~/components/GithubLink';
import NavbarMobileMenu from '~/components/NavbarMobileMenu';
import { NAV_LINKS } from '~/constant';

import navbarStyles from '~/styles/components/navbar.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: navbarStyles,
  },
];

export default function Navbar() {
  const theme = useLoaderData<Theme>();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link nav-link">
            Reda Salmi
          </Link>
        </div>

        <div className="nav-links">
          <ul className="nav-links-list">
            {NAV_LINKS.map(({ href, text }) => (
              <li key={href}>
                <Link to={href} className="nav-link nav-animated-link">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-icons">
          <div>
            <ThemeToggle
              theme={theme}
              btnClassName="theme-btn nav-icon"
              sunClassName="theme-sun"
              moonClassName="theme-moon"
              fadeClassName="fade"
            />
          </div>

          <div>
            <GithubLink
              linkClassName="nav-icon"
              svgClassName="nav-icon nav-github"
            />
          </div>
        </div>

        <NavbarMobileMenu />
      </div>
    </nav>
  );
}
