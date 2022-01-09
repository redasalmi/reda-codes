import { Github } from '~/components/icons';

interface GithubLinkProps {
  linkClassName?: string;
  svgClassName?: string;
}

export default function GithubLink({
  linkClassName,
  svgClassName,
}: GithubLinkProps) {
  return (
    <a
      target="_blank"
      className={linkClassName}
      rel="noopener noreferrer"
      href="https://github.com/redasalmi"
      aria-label="reda salmi github account"
    >
      <Github className={svgClassName} />
    </a>
  );
}
