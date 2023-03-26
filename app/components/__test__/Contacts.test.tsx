import { render, screen } from '@testing-library/react';

import { Contacts, Contact } from '~/components';

const mockedContacts = [
	{
		key: 'google-link',
		href: 'https://www.google.com/',
		text: 'check google',
	},
	{
		key: 'twitter-link',
		href: 'https://twitter.com',
		text: 'check twitter',
	},
	{
		key: 'github-link',
		href: 'https://github.com',
		text: 'check github',
	},
];

const mockedContact = {
	href: 'https://archlinux.org/',
	text: 'check archlinux',
};

describe('Contacts', () => {
	it('should render 3 contact links', () => {
		render(<Contacts contacts={mockedContacts} />);
		const links = screen.getAllByRole('link');

		expect(links.length).toBe(mockedContacts.length);
	});

	it('should render no contact links when contacts are empty', () => {
		const { container } = render(<Contacts contacts={[]} />);

		expect(container.childElementCount).toBe(0);
	});

	it('should render a link with text and an href attribute', () => {
		render(<Contact {...mockedContact} />);
		const link = screen.getByRole('link', { name: mockedContact.text });

		expect(link).toHaveAttribute('href', mockedContact.href);
	});
});
