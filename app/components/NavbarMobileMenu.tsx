import * as React from 'react';
import { Link } from 'remix';

import GithubLink from '~/components/GithubLink';
import { NAV_LINKS } from '~/constant';

export default function NavbarMobileMenu() {
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
    <>
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

      <div ref={linksRef} className="nav-mobile-links">
        <ul className="nav-mobile-links-list">
          {NAV_LINKS.map(({ href, text }) => (
            <li key={href}>
              <Link
                to={href}
                onClick={hideNavbar}
                className="container nav-link"
              >
                {text}
              </Link>
            </li>
          ))}

          <li className="nav-github-link">
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
    </>
  );
}
