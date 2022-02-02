import * as React from 'react';
import { motion } from 'framer-motion';

import { Linkedin, Twitter, Github, Envelope } from '~/components/icons';

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

function ContactLink({ href, children }: ContactLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover="hover"
      className="contact-link"
    >
      <motion.span
        variants={{
          hover: { scale: 1.1 },
        }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>

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
      </div>
    </section>
  );
}
