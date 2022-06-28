import * as React from 'react';

import { Github } from '~/components/icons';

interface GithubLinkProps {
  linkClassName?: string;
  onClick?: () => void;
  svgClassName?: string;
  children?: React.ReactNode;
}

export default function GithubLink({
  linkClassName,
  onClick,
  svgClassName,
  children,
}: GithubLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={linkClassName}
      href="https://github.com/redasalmi"
      aria-label="reda salmi github account"
    >
      {children}
      <Github aria-label="github" className={svgClassName} />
    </a>
  );
}
