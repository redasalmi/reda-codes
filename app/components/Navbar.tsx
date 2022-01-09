import { useLoaderData, Link } from 'remix';
import type { LinksFunction } from 'remix';
import type { Theme } from '~/types';

import ThemeToggle from '~/components/ThemeToggle';
import GithubLink from '~/components/GithubLink';
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
    <nav className="navbar">
      <div className="container">
        <div>
          <Link to="/" className="navbar-logo navbar-link">
            Reda Salmi
          </Link>
        </div>

        <div>
          <ul className="navbar-links">
            {NAV_LINKS.map(({ href, text }) => (
              <li key={href}>
                <Link to={href} className="navbar-link animated-link">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-icons">
          <div>
            <ThemeToggle
              theme={theme}
              btnClassName="theme-btn navbar-icon"
              sunClassName="theme-sun"
              moonClassName="theme-moon"
              fadeClassName="fade"
            />
          </div>

          <div>
            <GithubLink
              linkClassName="navbar-icon"
              svgClassName="navbar-icon navbar-github"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
