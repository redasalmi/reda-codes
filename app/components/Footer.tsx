import { Link } from 'remix';

import { NAV_LINKS } from '~/constant';

export default function Footer() {
  const footerLinks = [
    {
      href: '#home',
      text: 'Home',
    },
    ...NAV_LINKS,
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {footerLinks.map(({ href, text }) => (
            <Link
              to={href}
              key={`footer-${href}`}
              className="nav-animated-link"
            >
              {text}
            </Link>
          ))}
        </div>

        <div className="footer-copyright">
          <p>{new Date().getFullYear()} ©️ Reda Salmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
