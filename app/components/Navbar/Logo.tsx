import { Link } from '@remix-run/react';

export default function Logo() {
	return (
		<div className="z-[3]">
			<Link
				to="/"
				className="block text-2xl font-bold hover:text-chocolate hover:dark:text-dark-orange"
			>
				Reda Codes
			</Link>
		</div>
	);
}
