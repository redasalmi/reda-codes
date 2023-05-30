import postcss from '~/components/Icons/postcss.svg';
import sass from '~/components/Icons/sass.svg';
import tailwindcss from '~/components/Icons/tailwindcss.svg';
import javascript from '~/components/Icons/javascript.svg';
import typescript from '~/components/Icons/typescript.svg';
import react from '~/components/Icons/react.svg';
import nextjs from '~/components/Icons/nextjs.svg';
import remix from '~/components/Icons/remix.svg';
import nodejs from '~/components/Icons/nodejs.svg';
import shopify from '~/components/Icons/shopify.svg';
import express from '~/components/Icons/express.svg';
import restapi from '~/components/Icons/restapi.svg';
import graphql from '~/components/Icons/graphql.svg';
import git from '~/components/Icons/git.svg';

import type { Variants } from 'framer-motion';

export const skillsVariants: Variants = {
	up: {
		y: -10,
	},
};

export type SkillData = {
	title: string;
	imgSrc: string;
	imgClass?: string;
};

export const skills: SkillData[] = [
	{
		title: 'PostCSS',
		imgSrc: postcss,
	},
	{
		title: 'Sass',
		imgSrc: sass,
	},
	{
		title: 'Tailwindcss',
		imgSrc: tailwindcss,
	},
	{
		title: 'Javascript',
		imgSrc: javascript,
	},
	{
		title: 'Typescript',
		imgSrc: typescript,
	},
	{
		title: 'React',
		imgSrc: react,
	},
	{
		title: 'Next.js',
		imgSrc: nextjs,
	},
	{
		title: 'Remix',
		imgSrc: remix,
	},
	{
		title: 'Shopify',
		imgSrc: shopify,
	},
	{
		title: 'Node.js',
		imgSrc: nodejs,
	},
	{
		title: 'Express',
		imgSrc: express,
		imgClass: 'm-auto w-auto invert-0 dark:invert',
	},
	{
		title: 'Rest API',
		imgSrc: restapi,
	},
	{
		title: 'GraphQL',
		imgSrc: graphql,
	},
	{
		title: 'Git',
		imgSrc: git,
	},
];
