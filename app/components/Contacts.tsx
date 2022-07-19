import { motion, useReducedMotion } from 'framer-motion';

import { Section } from '~/components';
import { contactLinkVariants, contactTextVariants } from '~/constant';

import type { ContactData } from '~/constant';

type ContactProps = Omit<ContactData, 'key'>;

function Contact({ href, text, Icon, iconAriaLabel }: ContactProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      initial="init"
      target="_blank"
      rel="noreferrer"
      className="contact-link"
      variants={contactLinkVariants}
      whileHover={shouldReduceMotion ? undefined : 'hover'}
    >
      <motion.span variants={contactTextVariants}>
        <span>{text}</span>
        <Icon role="img" aria-label={iconAriaLabel} />
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
    <Section id="contact" className="contact" title="Contact">
      <div className="contact-links">
        {contacts.map(({ key, ...contact }) => (
          <Contact key={key} {...contact} />
        ))}
      </div>
    </Section>
  );
}
