import * as React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import { Links, GithubLink } from '~/components/Navbar';
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
  const controls = useAnimationControls();
  const hamburgerBtnRef = React.useRef<HTMLButtonElement>(null!);
  const linksRef = React.useRef<HTMLDivElement>(null!);

  const handleToggleNavbar = () => {
    const isOpen = linksRef.current.classList.toggle('nav-mobile-open');
    fixNavIconsPosition(isOpen);
    controls.start(isOpen ? 'show' : 'hide');
    hamburgerBtnRef.current.setAttribute(
      'aria-label',
      isOpen ? 'close navigation menu' : 'open navigation menu',
    );
  };

  const closeNavbar = (event: React.MouseEvent) => {
    const isOpen = linksRef.current.classList.contains('nav-mobile-open');
    const clickedOutsideNavbar = linksRef.current === event.target;

    if (isOpen && clickedOutsideNavbar) {
      linksRef.current.classList.remove('nav-mobile-open');
      fixNavIconsPosition(false);
      controls.start('hide');
    }
  };

  return (
    <>
      <motion.button
        type="button"
        animate={controls}
        ref={hamburgerBtnRef}
        aria-label="open navigation menu"
        className="nav-hamburger-btn"
        onClick={handleToggleNavbar}
      >
        {hamburgerBtnVariants.map(({ key, variants, transition }) => (
          <motion.span key={key} variants={variants} transition={transition} />
        ))}
      </motion.button>

      <motion.div
        ref={linksRef}
        initial="init"
        animate={controls}
        onClick={closeNavbar}
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
