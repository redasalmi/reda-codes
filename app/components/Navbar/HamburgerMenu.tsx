import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';

import Links from '~/components/Navbar/Links';
import GithubLink from '~/components/Navbar/GithubLink';

import { BTN_VARIANTS, LINKS_VARIANTS, LINKS_LIST_VARIANT } from '~/constant';

interface HamburgerMenuProps {
  toggleNavIconsPosition: () => void;
}

export default function HamburgerMenu({
  toggleNavIconsPosition,
}: HamburgerMenuProps) {
  const btnControls = useAnimation();
  const linkscontrols = useAnimation();
  const linksRef = React.useRef<HTMLDivElement>(null!);

  const handleToggleNavbar = () => {
    const isOpen = linksRef.current.classList.toggle('nav-mobile-open');
    toggleNavIconsPosition();
    btnControls.start(isOpen ? 'close' : 'open');
    linkscontrols.start(isOpen ? 'slideLeft' : 'slideRight', {
      duration: 0.3,
    });
  };

  const closeNavbar = (event: React.MouseEvent) => {
    const isOpen = linksRef.current.classList.contains('nav-mobile-open');
    const clickedOutsideNavbar = linksRef.current === event.target;

    if (isOpen && clickedOutsideNavbar) {
      linksRef.current.classList.remove('nav-mobile-open');
      toggleNavIconsPosition();
      btnControls.start('open');
      linkscontrols.start('slideRight', { duration: 0.3 });
    }
  };

  return (
    <>
      <motion.button
        type="button"
        animate={btnControls}
        aria-label="hamburger menu"
        className="nav-hamburger-btn"
        onClick={handleToggleNavbar}
      >
        {BTN_VARIANTS.map(({ key, variants, transition }) => (
          <motion.div key={key} variants={variants} transition={transition} />
        ))}
      </motion.button>

      <motion.div
        ref={linksRef}
        variants={LINKS_VARIANTS}
        animate={linkscontrols}
        onClick={closeNavbar}
        className="nav-mobile-links"
      >
        <motion.ul
          initial={{ x: '110%' }}
          variants={LINKS_LIST_VARIANT}
          className="nav-mobile-links-list"
        >
          <Links
            onClick={handleToggleNavbar}
            linkClassName="container nav-link"
          />

          <li className="nav-github-link">
            <GithubLink
              onClick={handleToggleNavbar}
              linkClassName="nav-github-btn"
              svgClassName="nav-github"
            >
              <span>Check out my github</span>
            </GithubLink>
          </li>
        </motion.ul>
      </motion.div>
    </>
  );
}
