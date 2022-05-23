import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { Section } from '~/components';
import { Linkedin, Twitter, Github, Envelope } from '~/components/icons';
import { contactLinkVariants, contactTextVariants } from '~/constant';

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

function ContactLink({ href, children }: ContactLinkProps) {
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
      <motion.span variants={contactTextVariants}>{children}</motion.span>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <Section id="contact" className="contact" title="Contact">
      <div className="contact-links">
        <ContactLink href="https://www.linkedin.com/in/reda-salmi-424a30168/">
          <span>Know more about me Through</span> <Linkedin />
        </ContactLink>

        <ContactLink href="https://twitter.com/redsalmi">
          <span>Message me on</span> <Twitter /> <span>if you want</span>
        </ContactLink>

        <ContactLink href="mailto:reda.salmi.elt@gmail.com">
          <span>Or just send me an email</span> <Envelope />
        </ContactLink>

        <ContactLink href="https://github.com/redasalmi">
          <span>Don&apos;t forget to check my work</span> <Github />
        </ContactLink>
      </div>
    </Section>
  );
}
