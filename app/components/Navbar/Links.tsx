import { Link } from '@remix-run/react';

import { navLinks } from '~/constant';

interface LinksProps {
	linkClassName?: string;
	onClick?: () => void;
}

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
