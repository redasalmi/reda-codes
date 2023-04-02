import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { MotionConfig } from 'framer-motion';

import { ThemeScript, Fonts, Navbar, Footer, ScrollUp } from '~/components';
import styles from '~/tailwind.css';

import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
	const title = 'Reda Salmi Portfolio';
	const description =
		'Reda Salmi personal website with projects, skills and contact informations';
	const previewImage = 'https://redacodes.com/preview.jpg';
	const previewImageAlt = 'Reda codes website preview';
	const twitterUsername = '@redsalmi';

	return [
		{
			charSet: 'utf-8',
		},
		{
			name: 'viewport',
			content: 'width=device-width,initial-scale=1',
		},
		{
			title,
		},
		{
			name: 'description',
			content: description,
		},
		{
			name: 'twitter:card',
			content: 'summary',
		},
		{
			name: 'twitter:site',
			content: twitterUsername,
		},
		{
			name: 'twitter:creator',
			content: twitterUsername,
		},
		{
			name: 'twitter:title',
			content: title,
		},
		{
			name: 'twitter:description',
			content: description,
		},
		{
			name: 'twitter:image',
			content: previewImage,
		},
		{
			name: 'twitter:image:alt',
			content: previewImageAlt,
		},
		{
			property: 'og:title',
			content: title,
		},
		{
			property: 'og:description',
			content: description,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: 'https://redacodes.com',
		},
		{
			property: 'og:image',
			content: previewImage,
		},
		{
			property: 'og:image:alt',
			content: previewImageAlt,
		},
		{
			property: 'og:image:width',
			content: '1190',
		},
		{
			property: 'og:image:height',
			content: '750',
		},
	];
};

export const links: LinksFunction = () => {
	return [
		{
			rel: 'manifest',
			href: '/manifest.webmanifest',
		},
		{
			rel: 'icon',
			href: '/favicon.ico',
			sizes: 'any',
		},
		{
			rel: 'icon',
			href: '/icon.svg',
			type: 'image/svg+xml',
		},
		{
			rel: 'apple-touch-icon',
			href: '/apple-touch-icon.png',
		},
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<ThemeScript />
				<Fonts />
				<Links />
			</head>
			<body id="top" tabIndex={-1}>
				<MotionConfig reducedMotion="user">
					<Navbar />
					<Outlet />
					<ScrollUp />
					<Footer />
				</MotionConfig>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
