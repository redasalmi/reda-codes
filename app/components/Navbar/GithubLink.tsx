import * as React from 'react';

import { Github } from '~/components/Icons';

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
	const id = React.useId();

	return (
		<a
			id={id}
			target="_blank"
			rel="noreferrer"
			onClick={onClick}
			className={linkClassName}
			href="https://github.com/redasalmi"
			aria-label="reda salmi github account"
		>
			{children}
			<Github role="img" aria-labelledby={id} className={svgClassName} />
		</a>
	);
}
