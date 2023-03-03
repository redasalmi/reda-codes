import { motion } from 'framer-motion';

import { Section } from '~/components';
import {
  projectVariants,
  projectFirstVariant,
  projectLastVariant,
} from '~/constant';

import type { ProjectData } from '~/constant';

type ProjectInfoProps = Omit<ProjectData, 'img' | 'key'> & { border: string };

function ProjectInfo({
  title,
  owner,
  desc,
  techStack,
  link,
  code,
  border,
}: ProjectInfoProps) {
  return (
    <div
      className={`md:px-10 flex flex-col justify-around m-auto p-5 h-full ${border}`}
    >
      <div>
        <h2 className="font-bold text-[1.4rem] md:text-lg">{title}</h2>
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
                className="inline-block font-bold text-primary-col dark:text-primary-col-dark animated-link"
              >
                {owner.name}
              </a>
            </>
          )}
        </p>
      </div>

      <div>
        <p className="text-justify">{desc}</p>
        <p className="text-secondary-col dark:text-secondary-col-dark">
          Tech Stack: {techStack.join(', ')}.
        </p>
      </div>

      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${title} website`}
          className="inline-block font-bold text-primary-col dark:text-primary-col-dark animated-link"
        >
          Visit Website
        </a>

        {code ? (
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            aria-label={`Check ${title} source code`}
            className="inline-block font-bold text-primary-col dark:text-primary-col-dark ml-5 animated-link"
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
    <div className={`w-full h-full ${border}`}>
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className={`w-full h-full ${border}`}
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

type ProjectProps = Omit<ProjectData, 'key'> & { imgFirst: boolean };

export function Project({
  title,
  owner,
  desc,
  techStack,
  img,
  imgFirst,
  link,
  code,
}: ProjectProps) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      data-testid="project"
      variants={projectVariants}
      className="flex flex-col md:flex-row rounded-[18px] my-[30px] h-[480px] sm:h-[520px] md:h-[310px] relative last-of-type:mb-0"
      viewport={{ once: true, amount: 0.26 }}
    >
      <motion.div
        variants={imgFirst ? projectLastVariant : projectFirstVariant}
        className={`h-[52%] w-full md:h-full md:w-[52%] bg-bg-primary dark:bg-bg-primary-dark ${
          imgFirst ? projectCard.last : projectCard.first
        }`}
      >
        <ProjectInfo
          title={title}
          owner={owner}
          desc={desc}
          techStack={techStack}
          link={link}
          code={code}
          border={imgFirst ? border.bottom : border.top}
        />
      </motion.div>

      <motion.div
        variants={imgFirst ? projectFirstVariant : projectLastVariant}
        className={`h-[52%] w-full md:h-full md:w-[52%] ${
          imgFirst
            ? `${projectCard.first} mb-[-4%] sm:mb-[-3%] md:mb-0 md:mr-[-3%]`
            : `${projectCard.last} mt-[-4%] sm:mt-[-3%] md:mt-0 md:ml-[-3%]`
        }`}
      >
        <ProjectImage
          img={img}
          border={imgFirst ? border.top : border.bottom}
        />
      </motion.div>
    </motion.div>
  );
}

interface ProjectsProps {
  projects: ProjectData[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <Section
      id="projects"
      title="My Projects"
      titleClassName="text-center md:text-left"
      className="overflow-hidden bg-bg-secondary dark:bg-bg-secondary-dark py-5 md:py-10 lg:py-[60px]"
      subTitle="These are some of the projects I worked on"
    >
      {projects.map(({ key, ...project }, index) => (
        <Project key={key} imgFirst={index % 2 !== 0} {...project} />
      ))}
    </Section>
  );
}
