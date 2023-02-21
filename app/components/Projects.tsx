import { motion } from 'framer-motion';

import { Section } from '~/components';
import {
  projectVariants,
  projectFirstVariant,
  projectLastVariant,
} from '~/constant';

import type { ProjectData } from '~/constant';

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
      className="project project-border"
      viewport={{ once: true, amount: 0.26 }}
    >
      <motion.div
        variants={imgFirst ? projectLastVariant : projectFirstVariant}
        className={`project-border project-card ${
          imgFirst ? 'project-last-card' : 'project-first-card'
        }`}
      >
        <div className="project-border project-info">
          <div>
            <h2 className="project-title">{title}</h2>
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
                    className="project-link animated-link"
                  >
                    {owner.name}
                  </a>
                </>
              )}
            </p>
          </div>

          <div>
            <p className="project-desc">{desc}</p>
            <p className="tech-stack">Tech Stack: {techStack.join(', ')}.</p>
          </div>

          <div>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${title} website`}
              className="project-link project-owner animated-link"
            >
              Visit Website
            </a>

            {code ? (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                aria-label={`Check ${title} source code`}
                className="project-link source-code animated-link"
              >
                Source code
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={imgFirst ? projectFirstVariant : projectLastVariant}
        className={`project-border project-card ${
          imgFirst ? 'project-first-card' : 'project-last-card'
        }`}
      >
        <div className="project-border project-img">
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
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
      className="projects py-5 md:py-10 lg:py-[60px]"
      subTitle="These are some of the projects I worked on"
    >
      {projects.map(({ key, ...project }, index) => (
        <Project key={key} imgFirst={index % 2 !== 0} {...project} />
      ))}
    </Section>
  );
}
