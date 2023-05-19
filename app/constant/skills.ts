import {
	Postcss,
	Sass,
	Tailwindcss,
	Javascript,
	Typescript,
	React,
	Nextjs,
	Remix,
	Nodejs,
	Shopify,
	Express,
	RestApi,
	Graphql,
	Git,
} from '~/components/Icons';

import type { Variants } from 'framer-motion';
import type { SvgPropsWithoutRef } from '~/components/Icons';

export const skillsVariants: Variants = {
	up: {
		y: -10,
	},
};

export type SkillData = {
	title: string;
	Icon: (props: SvgPropsWithoutRef) => JSX.Element;
	iconClass?: string;
};

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
		title: 'Tailwindcss',
		Icon: Tailwindcss,
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
	},
	{
		title: 'Remix',
		Icon: Remix,
	},
	{
		title: 'Shopify',
		Icon: Shopify,
	},
	{
		title: 'Node.js',
		Icon: Nodejs,
	},
	{
		title: 'Express',
		Icon: Express,
		iconClass: 'w-[70px] m-auto',
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
