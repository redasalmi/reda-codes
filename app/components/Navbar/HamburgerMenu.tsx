import * as React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import { Links, GithubLink } from '~/components/Navbar';
import {
  hamburgerBtnVariants,
  linksVariants,
  linksListVariants,
} from '~/constant';

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenu({
  isOpen,
  setIsOpen,
}: HamburgerMenuProps) {
  const controls = useAnimationControls();
  const hamburgerBtnRef = React.useRef<HTMLButtonElement>(null!);
  const linksRef = React.useRef<HTMLDivElement>(null!);

  const handleToggleNavbar = () => {
    const toggleIsOpen = !isOpen;
    setIsOpen(toggleIsOpen);
    controls.start(toggleIsOpen ? 'show' : 'hide');
    document.body.style.overflow = toggleIsOpen ? 'hidden' : 'initial';
    hamburgerBtnRef.current.setAttribute(
      'aria-label',
      toggleIsOpen ? 'close navigation menu' : 'open navigation menu',
    );
  };

  const closeNavbar = (event: React.MouseEvent) => {
    const clickedOutsideNavbar = linksRef.current === event.target;

    if (isOpen && clickedOutsideNavbar) {
      setIsOpen(false);
      document.body.style.overflow = 'initial';
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
        className="m-auto block h-[45px] w-[45px] cursor-pointer rounded-full border-2 border-fg-primary dark:border-fg-primary-dark"
        onClick={handleToggleNavbar}
      >
        {hamburgerBtnVariants.map(({ key, variants, transition }) => (
          <motion.span
            key={key}
            variants={variants}
            transition={transition}
            className="my-[3px] mx-auto block h-[1px] w-1/2 rounded-[5px] border border-fg-primary bg-fg-primary dark:border-fg-primary-dark dark:bg-fg-primary-dark"
          />
        ))}
      </motion.button>

      <motion.div
        ref={linksRef}
        initial="init"
        animate={controls}
        onClick={closeNavbar}
        variants={linksVariants}
        className="pointer-events-none fixed inset-0 z-[-1] flex justify-end overflow-hidden md:hidden"
      >
        <motion.ul
          variants={linksListVariants}
          className="flex h-full w-full translate-x-[110%] list-none flex-col bg-bg-primary pt-[90px] text-center dark:bg-bg-primary-dark sm:w-[320px] sm:text-left sm:shadow-[0_1px_3px] sm:shadow-[#4c4c4c]"
        >
          <Links
            onClick={handleToggleNavbar}
            linkClassName="text-[1.1rem] font-bold block py-5 border-t border-[#4c4c4c] hover:text-primary hover:dark:text-primary-dark sm:px-[54px] sm:text-[1.1rem]"
          />

          <li className="border-t border-[#4c4c4c] py-5 md:hidden">
            <GithubLink
              onClick={handleToggleNavbar}
              linkClassName="m-auto w-[70%] text-[1.2rem] rounded-3xl py-3 px-1 flex items-center justify-center text-fg-primary dark:text-fg-primary-dark font-bold border-2 border-violet sm:text-base sm:w-[80%]"
              svgClassName="w-[25px] h-[25px] ml-[10px]"
            >
              <span>Check out my github</span>
            </GithubLink>
          </li>
        </motion.ul>
      </motion.div>
    </>
  );
}
