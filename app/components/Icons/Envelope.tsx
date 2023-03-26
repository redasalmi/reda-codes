import type { SvgPropsWithoutRef } from '~/components/Icons';

export default function SvgEnvelope(props: SvgPropsWithoutRef) {
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
			<path d="m2 8 7.501 6.001a4 4 0 0 0 4.998 0L22 8" />
		</svg>
	);
}
