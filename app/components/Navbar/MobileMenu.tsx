import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';

import Links from '~/components/Navbar/Links';
import GithubLink from '~/components/Navbar/GithubLink';

import { BTN_VARIANTS, LINKS_VARIANTS, LINKS_LIST_VARIANT } from '~/constant';

export default function MobileMenu() {
  const btnControls = useAnimation();
  const linkscontrols = useAnimation();
  const btnRef = React.useRef<HTMLButtonElement>(null!);

  const handleToggleNavbar = () => {
    const isOpen = btnRef.current.classList.toggle('transform-btn');
    btnControls.start(isOpen ? 'close' : 'open');
    linkscontrols.start(isOpen ? 'slideLeft' : 'slideRight', {
      duration: 0.3,
    });
  };

  return (
    <>
      <div className="nav-hamburger">
        <motion.button
          ref={btnRef}
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
      </div>

      <motion.div
        variants={LINKS_VARIANTS}
        animate={linkscontrols}
        className="nav-mobile-links"
      >
        <motion.ul
          variants={LINKS_LIST_VARIANT}
          initial={{ x: '110%' }}
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
