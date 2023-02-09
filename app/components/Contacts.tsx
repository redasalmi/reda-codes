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
      className="contact-link"
      variants={contactLinkVariants}
      whileHover={useReducedAnimation('hover')}
    >
      <motion.span variants={contactTextVariants}>{text}</motion.span>
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
    <Section id="contact" className="contact" title="Contact">
      <div className="contact-links">
        {contacts.map(({ key, ...contact }) => (
          <Contact key={key} {...contact} />
        ))}
      </div>
    </Section>
  );
}
