import { useLoaderData, Link, Form } from 'remix';
import type { LinksFunction } from 'remix';
import type { Theme } from '~/types';

import { Sun, Moon, Github } from '~/components/icons';
import { NAV_LINKS } from '~/constant';

import navbarStyles from '~/styles/components/navbar.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: navbarStyles,
  },
];

export default function Navbar() {
  const theme = useLoaderData<Theme>();

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <Link to="/" className="navbar-logo navbar-link">
            Reda Salmi
          </Link>
        </div>

        <div>
          <ul className="navbar-links">
            {NAV_LINKS.map(({ href, text }) => (
              <li key={href}>
                <Link to={href} className="navbar-link animated-link">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-icons">
          <div>
            <Form method="post">
              <input type="text" name="theme" value={theme} hidden readOnly />
              <button type="submit" className="theme-btn navbar-icon">
                <Sun
                  className={
                    theme === 'light' ? ' theme-sun' : 'fade theme-sun'
                  }
                />
                <Moon
                  className={
                    theme === 'dark' ? 'theme-moon' : 'fade theme-moon'
                  }
                />
              </button>
            </Form>
          </div>

          <div>
            <a
              target="_blank"
              className="navbar-icon"
              rel="noopener noreferrer"
              href="https://github.com/redasalmi"
              aria-label="reda salmi github account"
            >
              <Github className="navbar-icon navbar-github" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
