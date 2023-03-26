import { Link } from '@remix-run/react';

import { navLinks } from '~/constant';

const footerLinks = [
  {
    href: '#top',
    text: 'Home',
  },
  ...navLinks,
];

export default function Footer() {
  return (
    <footer className="bg-ghost-white py-5 dark:bg-bg-section-black md:py-10">
      <div className="container mx-auto px-4 md:flex md:justify-between md:gap-10">
        <div className="flex justify-between md:max-w-[500px] md:flex-1">
          {footerLinks.map(({ href, text }) => (
            <Link to={href} key={`footer-${href}`} className="animated-link">
              {text}
            </Link>
          ))}
        </div>

        <div className="mt-[14px] text-center md:mt-0">
          <p>{new Date().getFullYear()} ©️ Reda Salmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
