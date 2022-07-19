import { Envelope, Github, Linkedin, Twitter } from '~/components/icons';

export interface ContactData {
  key: string;
  href: string;
  text: string;
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
      React.RefAttributes<SVGSVGElement>
  >;
  iconAriaLabel: string;
}

export const contacts: ContactData[] = [
  {
    key: 'linkedin-link',
    href: 'https://www.linkedin.com/in/reda-salmi-424a30168/',
    text: 'Know more about in Linkedin',
    Icon: Linkedin,
    iconAriaLabel: 'linkedin',
  },
  {
    key: 'twitter-link',
    href: 'https://twitter.com/redsalmi',
    text: 'Message me on Twitter',
    Icon: Twitter,
    iconAriaLabel: 'twitter',
  },
  {
    key: 'email-link',
    href: 'mailto:reda.salmi.elt@gmail.com',
    text: 'Or just send me an email',
    Icon: Envelope,
    iconAriaLabel: 'gmail',
  },
  {
    key: 'github-link',
    href: 'https://github.com/redasalmi',
    text: "Don't forget to check my work",
    Icon: Github,
    iconAriaLabel: 'github',
  },
];

export const contactLinkVariants = {
  init: {
    boxShadow: '6px 6px 0px var(--shadow-primary)',
  },
  hover: {
    boxShadow: '0px 0px 0px var(--shadow-primary)',
  },
};

export const contactTextVariants = {
  hover: {
    scale: 1.1,
  },
};
