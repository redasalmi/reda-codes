import * as React from 'react';

import { SMALL } from '~/constant';
import Links from '~/components/Navbar/Links';

export default function MobileMenu() {
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
    linksRef.current.style.animation = `0.3s slide-${
      window.innerWidth > SMALL ? 'left' : 'down'
    } ease`;
  };

  const hideNavbar = () => {
    hamburgerRef.current.classList.remove('transform');
    linksRef.current.style.animation = `0.3s slide-${
      window.innerWidth > SMALL ? 'right' : 'up'
    } ease`;
    timerRef.current = setTimeout(() => {
      linksRef.current.style.display = 'none';
    }, 200);
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

      <Links linksRef={linksRef} hideNavbar={hideNavbar} mobile />
    </>
  );
}
