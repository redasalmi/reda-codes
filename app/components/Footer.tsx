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
    <footer className="py-5 md:py-10">
      <div className="container md:flex md:justify-between md:gap-10">
        <div className="flex justify-between md:flex-1 md:max-w-[500px]">
          {footerLinks.map(({ href, text }) => (
            <Link to={href} key={`footer-${href}`} className="animated-link">
              {text}
            </Link>
          ))}
        </div>

        <div className="text-center mt-[14px] md:mt-0">
          <p>{new Date().getFullYear()} ©️ Reda Salmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
