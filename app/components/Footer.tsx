import { Link } from '@remix-run/react';

import { Section } from '~/components';
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
    <Section type="footer" className="footer">
      <div className="footer-links">
        {footerLinks.map(({ href, text }) => (
          <Link to={href} key={`footer-${href}`} className="animated-link">
            {text}
          </Link>
        ))}
      </div>

      <div className="footer-copyright">
        <p>{new Date().getFullYear()} ©️ Reda Salmi. All rights reserved.</p>
      </div>
    </Section>
  );
}
