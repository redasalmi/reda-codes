import { Link } from '@remix-run/react';

export default function Logo() {
  return (
    <div className="nav-logo">
      <Link to="/" className="nav-logo-link nav-link" aria-label="home page">
        Reda Codes
      </Link>
    </div>
  );
}
