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
      className="w-full p-5 text-xl rounded-md text-fg-primary  bg-bg-primary dark:text-fg-primary-dark dark:bg-bg-primary-dark shadow-[6px_6px_0_var(--shadow-primay)] md:w-[49%] md:text-base lg:text-xl"
      variants={contactLinkVariants}
      whileHover={useReducedAnimation('hover')}
    >
      <motion.span
        variants={contactTextVariants}
        className="flex justify-center items-center gap-[5px]"
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
      className="pb-[120px] bg-bg-secondary dark:bg-bg-secondary-dark"
    >
      <div className="flex flex-wrap justify-between gap-[10px] md:gap-3 lg:gap-4">
        {contacts.map(({ key, ...contact }) => (
          <Contact key={key} {...contact} />
        ))}
      </div>
    </Section>
  );
}
