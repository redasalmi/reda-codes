import ThemeToggle from '~/components/Navbar/ThemeToggle';
import GithubLink from '~/components/Navbar/GithubLink';

export default function Icons() {
  return (
    <div className="nav-icons">
      <div>
        <ThemeToggle />
      </div>

      <div>
        <GithubLink
          linkClassName="nav-icon"
          svgClassName="nav-icon nav-github"
        />
      </div>
    </div>
  );
}
