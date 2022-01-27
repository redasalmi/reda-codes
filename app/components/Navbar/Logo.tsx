import { Link } from 'remix';

import { LogoSmall } from '~/components/icons';

export default function Logo() {
  return (
    <div className="nav-logo">
      <Link to="/" className="nav-logo-link nav-link" aria-label="home page">
        <LogoSmall width={150} height={49} className="nav-logo-svg" />
      </Link>
    </div>
  );
}
