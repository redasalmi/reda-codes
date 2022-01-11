import * as React from 'react';
import { Github } from '~/components/icons';

interface GithubLinkProps {
  linkClassName?: string;
  svgClassName?: string;
  children?: React.ReactNode;
}

export default function GithubLink({
  linkClassName,
  svgClassName,
  children,
}: GithubLinkProps) {
  return (
    <a
      target="_blank"
      className={linkClassName}
      rel="noopener noreferrer"
      href="https://github.com/redasalmi"
      aria-label="reda salmi github account"
    >
      {children}
      <Github className={svgClassName} />
    </a>
  );
}
