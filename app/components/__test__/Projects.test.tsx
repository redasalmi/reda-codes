import { render, screen } from '@testing-library/react';

import { Projects, Project } from '~/components';

const mockedProjects = [
  {
    key: 'khedemni',
    title: 'Khedemni',
    owner: {
      name: 'Buileo',
      link: 'https://www.buileo.com/',
    },
    desc: 'A recruitment web application specialized in the fields of hostelry and restoration where companies can post job offers. I made all the frontend for this application.',
    techStack: ['React', 'Redux', 'Bootstrap'],
    img: {
      src: 'images/khedemni.webp',
      alt: 'khedemni, a recruitment website',
    },
    link: 'https://khedemni.com/',
  },
];

const mockedProject = {
  title: 'Khedemni',
  owner: {
    name: 'Buileo',
    link: 'https://www.buileo.com/',
  },
  desc: 'A recruitment web application specialized in the fields of hostelry and restoration where companies can post job offers. I made all the frontend for this application.',
  techStack: ['React', 'Redux', 'Bootstrap'],
  img: {
    src: 'images/khedemni.webp',
    alt: 'khedemni, a recruitment website',
  },
  link: 'https://khedemni.com/',
  imgFirst: false,
};

describe('Projects', () => {
  it('should render 1 project', () => {
    render(<Projects projects={mockedProjects} />);
    const projects = screen.getAllByTestId('project');

    expect(projects.length).toBe(mockedProjects.length);
  });

  it('should render no projects', () => {
    const { container } = render(<Projects projects={[]} />);

    expect(container.childElementCount).toBe(0);
  });

  it('should render the project title', () => {
    render(<Project {...mockedProject} />);
    const heading = screen.getByRole('heading', { name: mockedProject.title });

    expect(heading).toBeInTheDocument();
  });

  it('should render a link to the project page', () => {
    render(<Project {...mockedProject} />);
    const link = screen.getByRole('link', {
      name: RegExp(`visit ${mockedProject.title} website`, 'i'),
    });

    expect(link).toHaveAttribute('href', mockedProject.link);
  });

  it('should render the project tech stack', () => {
    render(<Project {...mockedProject} />);
    const paragraph = screen.getByText(/tech stack:/i);
    const techStack = mockedProject.techStack.join(', ');

    expect(paragraph).toHaveTextContent(techStack);
  });
});
