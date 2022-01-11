import * as React from 'react';
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
  const linksRef = React.useRef<HTMLDivElement>(null!);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null!);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const showNavbar = () => {
    hamburgerRef.current.classList.add('transform');
    linksRef.current.style.display = 'block';
    timerRef.current = setTimeout(() => {
      linksRef.current.style.opacity = '1';
    }, 100);
  };

  const hideNavbar = () => {
    hamburgerRef.current.classList.remove('transform');
    linksRef.current.style.opacity = '0';
    timerRef.current = setTimeout(() => {
      linksRef.current.style.display = 'none';
    }, 400);
  };

  const handleToggleNavbar = () => {
    if (linksRef.current.style.display !== 'block') {
      showNavbar();
    } else {
      hideNavbar();
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link nav-link">
            Reda Salmi
          </Link>
        </div>

        <div ref={linksRef} className="nav-links">
          <ul className="nav-links-list">
            {NAV_LINKS.map(({ href, text }) => (
              <li key={href}>
                <Link
                  to={href}
                  onClick={hideNavbar}
                  className="nav-link nav-animated-link"
                >
                  {text}
                </Link>
              </li>
            ))}

            <li>
              <GithubLink
                onClick={hideNavbar}
                linkClassName="nav-github-btn"
                svgClassName="nav-github"
              >
                <span>Check out my github</span>
              </GithubLink>
            </li>
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

        <div className="nav-hamburger">
          <button
            type="button"
            ref={hamburgerRef}
            aria-label="hamburger menu"
            className="nav-hamburger-btn"
            onClick={handleToggleNavbar}
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      </div>
    </nav>
  );
}
