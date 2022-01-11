import * as React from 'react';
import { Link } from 'remix';

import GithubLink from '~/components/Navbar/GithubLink';
import { NAV_LINKS } from '~/constant';

interface LinksProps {
  mobile?: false;
}

interface MobileLinksProps {
  linksRef: React.RefObject<HTMLDivElement>;
  hideNavbar: () => void;
  mobile: true;
}

export default function Links(props: LinksProps | MobileLinksProps) {
  if (!props.mobile) {
    return (
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
    );
  }

  const { linksRef, hideNavbar } = props;

  return (
    <div ref={linksRef} className="nav-mobile-links">
      <ul className="nav-mobile-links-list">
        {NAV_LINKS.map(({ href, text }) => (
          <li key={href}>
            <Link to={href} onClick={hideNavbar} className="container nav-link">
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
  );
}
