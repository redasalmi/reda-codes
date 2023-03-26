import { motion } from 'framer-motion';

import { Section } from '~/components';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { contactLinkVariants, contactTextVariants } from '~/constant';

import type { ContactData } from '~/constant';

type ContactProps = Omit<ContactData, 'key'>;

export function Contact({ href, text }: ContactProps) {
	return (
		<motion.a
			href={href}
			initial="init"
			target="_blank"
			rel="noreferrer"
			className="w-full rounded-md bg-ghost-white p-5 text-xl text-fg-black shadow-[6px_6px_0] shadow-dark-gray dark:bg-bg-section-black dark:text-fg-white dark:shadow-bg-shadow-black md:w-[49%] md:text-base lg:text-xl"
			variants={contactLinkVariants}
			whileHover={useReducedAnimation('hover')}
		>
			<motion.span
				variants={contactTextVariants}
				className="flex items-center justify-center gap-[5px]"
			>
				{text}
			</motion.span>
		</motion.a>
	);
}

interface ContactsProps {
	contacts: ContactData[];
}

export default function Contacts({ contacts }: ContactsProps) {
	if (!contacts.length) {
		return null;
	}

	return (
		<Section
			id="contact"
			title="Contact"
			className="bg-white pb-20 dark:bg-bg-section-dark-gray sm:pb-[120px]"
		>
			<div className="flex flex-wrap justify-between gap-[10px] md:gap-3 lg:gap-4">
				{contacts.map(({ key, ...contact }) => (
					<Contact key={key} {...contact} />
				))}
			</div>
		</Section>
	);
}
