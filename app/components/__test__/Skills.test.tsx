import { render, screen } from '@testing-library/react';

import { Skills, Skill } from '~/components';
import javascript from '~/components/Icons/javascript.svg';
import tailwindcss from '~/components/Icons/tailwindcss.svg';
import typescript from '~/components/Icons/typescript.svg';

const mockedSkills = [
	{
		id: 'javascript',
		title: 'Javascript',
		imgSrc: javascript,
	},
	{
		id: 'typescript',
		title: 'Typescript',
		imgSrc: typescript,
	},
];

const mockedSkill = {
	id: 'postcss',
	title: 'PostCSS',
	imgSrc: tailwindcss,
};

describe('Skills', () => {
	it('should render 2 skills', () => {
		render(<Skills skills={mockedSkills} />);
		const skills = screen.getAllByTestId('skill');

		expect(skills.length).toBe(mockedSkills.length);
	});

	it('should render no skills', () => {
		const { container } = render(<Skills skills={[]} />);

		expect(container.childElementCount).toBe(0);
	});

	it('should render the skill title', () => {
		render(<Skill {...mockedSkill} />);
		const title = screen.getByText(mockedSkill.title);

		expect(title).toBeInTheDocument();
	});

	it('should render the skill icon', () => {
		render(<Skill {...mockedSkill} />);
		const icon = screen.getByRole('img', { name: mockedSkill.title });

		expect(icon).toBeInTheDocument();
	});
});
