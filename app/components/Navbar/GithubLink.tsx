import * as React from 'react';

import github from '~/assets/icons/github.svg';

type GithubLinkProps = {
	linkClassName?: string;
	onClick?: () => void;
	svgClassName?: string;
	children?: React.ReactNode;
};

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
			<img
				src={github}
				aria-labelledby={id}
				className={`invert-0 dark:invert ${svgClassName}`}
			/>
		</a>
	);
}
