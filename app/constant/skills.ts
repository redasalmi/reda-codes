import {
  Postcss,
  Sass,
  Javascript,
  Typescript,
  React,
  Nextjs,
  Remix,
  Nodejs,
  Express,
  Mongodb,
  RestApi,
  Graphql,
  Git,
} from '~/components/Icons';

import type { SvgPropsWithoutRef } from '~/components/Icons';

export interface SkillData {
  title: string;
  Icon: (props: SvgPropsWithoutRef) => JSX.Element;
  iconClass?: string;
}

export const skills: SkillData[] = [
  {
    title: 'PostCSS',
    Icon: Postcss,
  },
  {
    title: 'Sass',
    Icon: Sass,
  },
  {
    title: 'Javascript',
    Icon: Javascript,
  },
  {
    title: 'Typescript',
    Icon: Typescript,
  },
  {
    title: 'React',
    Icon: React,
  },
  {
    title: 'Next.js',
    Icon: Nextjs,
    iconClass: 'nextjs-skill',
  },
  {
    title: 'Remix',
    Icon: Remix,
    iconClass: 'remix-skill',
  },
  {
    title: 'Node.js',
    Icon: Nodejs,
  },
  {
    title: 'Express',
    Icon: Express,
    iconClass: 'express-skill',
  },
  {
    title: 'MongoDB',
    Icon: Mongodb,
    iconClass: 'mongodb-skill',
  },
  {
    title: 'Rest API',
    Icon: RestApi,
  },
  {
    title: 'GraphQL',
    Icon: Graphql,
  },
  {
    title: 'Git',
    Icon: Git,
  },
];
