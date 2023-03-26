import type { Variants } from 'framer-motion';

export interface ContactData {
  key: string;
  href: string;
  text: string;
}

export const contacts: ContactData[] = [
  {
    key: 'linkedin-link',
    href: 'https://www.linkedin.com/in/reda-salmi-424a30168/',
    text: 'Know more about me on Linkedin',
  },
  {
    key: 'twitter-link',
    href: 'https://twitter.com/redsalmi',
    text: 'Message me on Twitter',
  },
  {
    key: 'email-link',
    href: 'mailto:reda.salmi.elt@gmail.com',
    text: 'Just send me an email',
  },
  {
    key: 'github-link',
    href: 'https://github.com/redasalmi',
    text: "Don't forget to check my github",
  },
];

export const contactLinkVariants: Variants = {
  init: {
    boxShadow: '6px 6px 0px var(--element-shadow)',
  },
  hover: {
    boxShadow: '0px 0px 0px var(--element-shadow)',
  },
};

export const contactTextVariants: Variants = {
  hover: {
    scale: 1.1,
  },
};
