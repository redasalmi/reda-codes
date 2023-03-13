import * as React from 'react';

import { ThemeToggle } from '~/components';
import { HamburgerMenu, GithubLink } from '~/components/Navbar';

export default function NavButtons() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`z-[3] flex flex-1 items-center justify-end gap-[10px] md:flex-[0] ${
        isOpen
          ? 'container fixed left-0 right-0 mx-auto px-4 md:static md:m-0 md:max-w-none md:p-0'
          : ''
      }`}
    >
      <div>
        <ThemeToggle />
      </div>

      <div className="md:hidden">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="hidden md:block">
        <GithubLink
          linkClassName="w-[45px] h-[45px] block"
          svgClassName="w-[45px] h-[45px] block"
        />
      </div>
    </div>
  );
}
