import { useLoaderData, Link, Form } from 'remix';
import type { LinksFunction } from 'remix';
import type { Theme } from '~/types';
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
                <svg
                  className={
                    theme === 'light' ? ' theme-sun' : 'fade theme-sun'
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"
                  ></path>
                </svg>
                <svg
                  className={
                    theme === 'dark' ? 'theme-moon' : 'fade theme-moon'
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
                  ></path>
                </svg>
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
              <svg
                className="navbar-icon navbar-github"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
