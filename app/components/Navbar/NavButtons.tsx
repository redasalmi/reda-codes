import * as React from 'react';

import { ThemeToggle } from '~/components';
import { HamburgerMenu, GithubLink } from '~/components/Navbar';

export default function NavButtons() {
  const navBtnsRef = React.useRef<HTMLDivElement>(null!);

  const fixNavIconsPosition = (fix: boolean) => {
    navBtnsRef.current.classList.toggle('container', fix);
    navBtnsRef.current.classList.toggle('nav-icons-fixed', fix);
  };

  return (
    <div className="nav-icons" ref={navBtnsRef}>
      <div>
        <ThemeToggle />
      </div>

      <div>
        <HamburgerMenu fixNavIconsPosition={fixNavIconsPosition} />
      </div>

      <div>
        <GithubLink
          linkClassName="nav-icon"
          svgClassName="nav-icon nav-github"
        />
      </div>
    </div>
  );
}
