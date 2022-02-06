import { Link } from 'remix';

import Section from '~/components/Section';

import { navLinks } from '~/constant';

export default function Footer() {
  const footerLinks = [
    {
      href: '#home',
      text: 'Home',
    },
    ...navLinks,
  ];

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
