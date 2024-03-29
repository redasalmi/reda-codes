import { motion } from 'framer-motion';
import clsx from 'clsx';

import { Section } from '~/components';
import { projectVariants } from '~/constant';

import type { ProjectData } from '~/constant';

type ProjectInfoProps = { project: Omit<ProjectData, 'img'> } & {
	border: string;
};

function ProjectInfo({ project, border }: ProjectInfoProps) {
	const { key, title, owner, desc, techStack, link, code } = project;

	return (
		<div
			className={clsx(
				'm-auto flex h-full flex-col justify-around p-5 md:px-10',
				border,
			)}
		>
			<div>
				<h2 className="text-[1.4rem] font-bold md:text-lg">{title}</h2>
				<p>
					{!owner ? (
						'Personal Project'
					) : (
						<>
							<span>Made for </span>
							<a
								href={owner.link}
								target="_blank"
								rel="noreferrer"
								className="animated-link inline-block font-bold text-chocolate dark:text-dark-orange"
							>
								{owner.name}
							</a>
						</>
					)}
				</p>
			</div>

			<div>
				<p className="text-justify">{desc}</p>
				<ul className="my-2 flex flex-wrap gap-2 text-sm text-royal-blue dark:text-lime-green">
					{techStack.map((teck) => (
						<li
							key={`${key}-${teck}`}
							className="rounded-3xl bg-white px-4 py-1  dark:bg-bg-section-dark-gray"
						>
							{teck}
						</li>
					))}
				</ul>
			</div>

			<div>
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					aria-label={`Visit ${title} website`}
					className="animated-link inline-block font-bold text-chocolate dark:text-dark-orange"
				>
					Visit Website
				</a>

				{code ? (
					<a
						href={code}
						target="_blank"
						rel="noreferrer"
						aria-label={`Check ${title} source code`}
						className="animated-link ml-5 inline-block font-bold text-chocolate dark:text-dark-orange"
					>
						Source code
					</a>
				) : null}
			</div>
		</div>
	);
}

type ProjectImageProps = Pick<ProjectData, 'img'> & { border: string };

function ProjectImage({ img, border }: ProjectImageProps) {
	return (
		<div className={clsx('h-full w-full', border)}>
			<img
				src={img.src}
				alt={img.alt}
				loading="lazy"
				className={clsx('h-full w-full', border)}
			/>
		</div>
	);
}

const order = {
	first: 'order-1',
	last: 'order-2',
};

const clip = {
	first: 'project-card-first-clip',
	last: 'project-card-last-clip',
};

const border = {
	top: 'rounded-tl-[18px] rounded-tr-[18px] md:rounded-tr-none md:rounded-bl-[18px]',
	bottom:
		'rounded-bl-[18px] rounded-br-[18px] md:rounded-bl-none md:rounded-tr-[18px]',
};

const projectCard = {
	first: `${order.first} ${border.top} ${clip.first}`,
	last: `${order.last} ${border.bottom} ${clip.last}`,
};

type ProjectProps = { project: ProjectData } & { imgFirst: boolean };

export function Project({ project, imgFirst }: ProjectProps) {
	return (
		<motion.div
			initial="hide"
			whileInView="show"
			data-testid="project"
			variants={projectVariants}
			className="relative my-[30px] flex h-[480px] flex-col rounded-[18px] last-of-type:mb-0 sm:h-[520px] md:h-[310px] md:flex-row"
			viewport={{ once: true, amount: 0.26 }}
		>
			<motion.div
				className={clsx(
					'h-[52%] w-full bg-ghost-white dark:bg-bg-section-black md:h-full md:w-[52%]',
					imgFirst ? projectCard.last : projectCard.first,
				)}
			>
				<ProjectInfo
					project={project}
					border={imgFirst ? border.bottom : border.top}
				/>
			</motion.div>

			<motion.div
				className={clsx(
					'h-[52%] w-full md:h-full md:w-[52%]',
					imgFirst
						? `${projectCard.first} mb-[-4%] sm:mb-[-3%] md:mb-0 md:mr-[-3%]`
						: `${projectCard.last} mt-[-4%] sm:mt-[-3%] md:ml-[-3%] md:mt-0`,
				)}
			>
				<ProjectImage
					img={project.img}
					border={imgFirst ? border.top : border.bottom}
				/>
			</motion.div>
		</motion.div>
	);
}

type ProjectsProps = {
	projects: ProjectData[];
};

export default function Projects({ projects }: ProjectsProps) {
	if (!projects.length) {
		return null;
	}

	return (
		<Section
			id="projects"
			title="My Projects"
			titleClassName="text-center md:text-left"
			className="overflow-hidden bg-white py-5 dark:bg-bg-section-dark-gray md:py-10 lg:py-[60px]"
			subTitle="These are some of the projects I worked on"
		>
			{projects.map((project, index) => (
				<Project
					key={project.key}
					imgFirst={index % 2 !== 0}
					project={project}
				/>
			))}
		</Section>
	);
}
