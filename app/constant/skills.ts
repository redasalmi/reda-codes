import postcss from '~/assets/icons/postcss.svg';
import sass from '~/assets/icons/sass.svg';
import tailwindcss from '~/assets/icons/tailwindcss.svg';
import javascript from '~/assets/icons/javascript.svg';
import typescript from '~/assets/icons/typescript.svg';
import react from '~/assets/icons/react.svg';
import nextjs from '~/assets/icons/nextjs.svg';
import remix from '~/assets/icons/remix.svg';
import nodejs from '~/assets/icons/nodejs.svg';
import shopify from '~/assets/icons/shopify.svg';
import express from '~/assets/icons/express.svg';
import restapi from '~/assets/icons/restapi.svg';
import graphql from '~/assets/icons/graphql.svg';
import git from '~/assets/icons/git.svg';

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
		imgClass: 'w-[32px] h-[20px] m-auto',
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
		imgClass: 'w-[34px] h-[40px] m-auto',
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
		imgClass: 'm-auto w-20 invert-0 dark:invert',
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
