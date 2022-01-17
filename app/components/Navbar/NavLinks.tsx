import Links from '~/components/Navbar/Links';

export default function NavLinks() {
  return (
    <div className="nav-links">
      <ul className="nav-links-list">
        <Links linkClassName="nav-link nav-animated-link" />
      </ul>
    </div>
  );
}
