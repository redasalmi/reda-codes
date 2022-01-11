import * as React from 'react';
import { Link } from 'remix';

import GithubLink from '~/components/Navbar/GithubLink';
import { NAV_LINKS } from '~/constant';

interface LinksProps {
  linksRef?: React.RefObject<HTMLDivElement>;
  hideNavbar?: () => void;
  mobile?: boolean;
}

export default function Links({
  linksRef,
  hideNavbar,
  mobile = false,
}: LinksProps) {
  return (
    <div ref={linksRef} className={mobile ? 'nav-mobile-links' : 'nav-links'}>
      <ul className={mobile ? 'nav-mobile-links-list' : 'nav-links-list'}>
        {NAV_LINKS.map(({ href, text }) => (
          <li key={href}>
            <Link
              to={href}
              onClick={hideNavbar}
              className={
                mobile ? 'container nav-link' : 'nav-link nav-animated-link'
              }
            >
              {text}
            </Link>
          </li>
        ))}

        {mobile ? (
          <li className="nav-github-link">
            <GithubLink
              onClick={hideNavbar}
              linkClassName="nav-github-btn"
              svgClassName="nav-github"
            >
              <span>Check out my github</span>
            </GithubLink>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
