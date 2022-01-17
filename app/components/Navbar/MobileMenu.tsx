import * as React from 'react';
import { useAnimation } from 'framer-motion';

import Links from '~/components/Navbar/Links';

export default function MobileMenu() {
  const controls = useAnimation();
  const btnRef = React.useRef<HTMLButtonElement>(null!);

  const handleToggleNavbar = () => {
    const isOpen = btnRef.current.classList.toggle('transform-btn');
    controls.start(isOpen ? 'slideLeft' : 'slideRight', {
      duration: 0.3,
    });
  };

  return (
    <>
      <div className="nav-hamburger">
        <button
          ref={btnRef}
          type="button"
          aria-label="hamburger menu"
          className="nav-hamburger-btn"
          onClick={handleToggleNavbar}
        >
          <div />
          <div />
          <div />
        </button>
      </div>

      <Links
        mobile
        animationControls={controls}
        hideNavbar={handleToggleNavbar}
      />
    </>
  );
}
