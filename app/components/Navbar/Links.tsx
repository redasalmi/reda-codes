import { Link } from '@remix-run/react';

import { navLinks } from '~/constant';

type LinksProps = {
	linkClassName?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function Links({ linkClassName, onClick }: LinksProps) {
	return (
		<>
			{navLinks.map(({ href, text }) => (
				<li key={href}>
					<Link to={href} onClick={onClick} className={linkClassName}>
						{text}
					</Link>
				</li>
			))}
		</>
	);
}
