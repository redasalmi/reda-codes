import { Link } from 'remix';

export default function Logo() {
  return (
    <div className="nav-logo">
      <Link to="/" className="nav-logo-link nav-link">
        Reda Salmi
      </Link>
    </div>
  );
}
