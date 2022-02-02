import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';

import Links from '~/components/Navbar/Links';
import GithubLink from '~/components/Navbar/GithubLink';

import {
  hamburgerBtnVariants,
  linksVariants,
  linksListVariants,
} from '~/constant';

interface HamburgerMenuProps {
  fixNavIconsPosition: (fix: boolean) => void;
}

export default function HamburgerMenu({
  fixNavIconsPosition,
}: HamburgerMenuProps) {
  const btnControls = useAnimation();
  const linkscontrols = useAnimation();
  const linksRef = React.useRef<HTMLDivElement>(null!);

  const handleToggleNavbar = () => {
    const isOpen = linksRef.current.classList.toggle('nav-mobile-open');
    fixNavIconsPosition(isOpen);
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
      fixNavIconsPosition(false);
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
        {hamburgerBtnVariants.map(({ key, variants, transition }) => (
          <motion.div key={key} variants={variants} transition={transition} />
        ))}
      </motion.button>

      <motion.div
        ref={linksRef}
        initial="init"
        onClick={closeNavbar}
        animate={linkscontrols}
        variants={linksVariants}
        className="nav-mobile-links"
      >
        <motion.ul
          variants={linksListVariants}
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
