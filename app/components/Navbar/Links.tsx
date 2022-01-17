import { Link } from 'remix';
import { motion } from 'framer-motion';
import type { AnimationControls } from 'framer-motion';

import GithubLink from '~/components/Navbar/GithubLink';
import { NAV_LINKS } from '~/constant';

interface LinksProps {
  mobile?: false;
}

interface MobileLinksProps {
  hideNavbar: () => void;
  animationControls: AnimationControls;
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

  const { animationControls, hideNavbar } = props;

  const links = {
    slideLeft: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(4px)',
    },
    slideRight: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0)',
    },
  };

  const list = {
    slideLeft: { x: '0%' },
    slideRight: { x: '110%' },
  };

  return (
    <motion.div
      animate={animationControls}
      variants={links}
      className="nav-mobile-links"
    >
      <motion.ul
        animate={animationControls}
        variants={list}
        initial={{ x: '110%' }}
        className="nav-mobile-links-list"
      >
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
      </motion.ul>
    </motion.div>
  );
}
