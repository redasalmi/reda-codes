import * as React from 'react';

import { ThemeToggle } from '~/components';
import { HamburgerMenu, GithubLink } from '~/components/Navbar';

export default function NavButtons() {
  const [open, setOpen] = React.useState(false);

  const fixNavIconsPosition = (fix: boolean) => setOpen(fix);

  return (
    <div
      className={`z-[3] flex flex-1 items-center justify-end gap-[10px] md:flex-[0] ${
        open
          ? 'container fixed left-0 right-0 md:static md:m-0 md:max-w-none md:p-0'
          : ''
      }`}
    >
      <div>
        <ThemeToggle />
      </div>

      <div className="md:hidden">
        <HamburgerMenu fixNavIconsPosition={fixNavIconsPosition} />
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
