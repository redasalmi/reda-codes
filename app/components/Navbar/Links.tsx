import { Link } from 'remix';

import { NAV_LINKS } from '~/constant';

interface LinksProps {
  linkClassName?: string;
  onClick?: () => void;
}

export default function Links({ linkClassName, onClick }: LinksProps) {
  return (
    <>
      {NAV_LINKS.map(({ href, text }) => (
        <li key={href}>
          <Link to={href} onClick={onClick} className={linkClassName}>
            {text}
          </Link>
        </li>
      ))}
    </>
  );
}
