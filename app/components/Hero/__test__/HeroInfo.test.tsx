import { render, screen } from '@testing-library/react';

import { HeroInfo } from '~/components/Hero';

describe('HeroInfo', () => {
	it('should have a heading with full stack web developer title', () => {
		render(<HeroInfo />);
		const heading = screen.queryByRole('heading', {
			name: /full stack web developer/i,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should have a link to my projects', () => {
		render(<HeroInfo />);
		const link = screen.queryByRole('link', {
			name: /see my projects/i,
		});

		expect(link).toBeInTheDocument();
	});

	it('should have a link to my contacts', () => {
		render(<HeroInfo />);
		const link = screen.queryByRole('link', {
			name: /more about me/i,
		});

		expect(link).toBeInTheDocument();
	});
});
