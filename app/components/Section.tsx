import * as React from 'react';

type SectionProps = {
	id?: string;
	className?: string;
	containerclassName?: string;
	title?: string;
	subTitle?: string;
	titleClassName?: string;
	children: React.ReactNode;
};

export default function Section({
	id,
	className,
	containerclassName,
	title,
	subTitle,
	titleClassName,
	children,
}: SectionProps) {
	return (
		<section id={id} className={className}>
			<div className={`container mx-auto px-4 ${containerclassName || ''}`}>
				{title ? (
					<h2 className={`text-2xl font-bold ${titleClassName}`}>{title}</h2>
				) : null}
				{subTitle ? <p className={titleClassName}>{subTitle}</p> : null}
				{children}
			</div>
		</section>
	);
}
