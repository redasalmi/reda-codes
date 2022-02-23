import { motion } from 'framer-motion';

import { Section } from '~/components';
import {
  projectsData,
  projectVariants,
  projectFirstVariant,
  projectLastVariant,
} from '~/constant';

interface ProjectProps {
  title: string;
  owner?: {
    name: string;
    link: string;
  };
  desc: string;
  techStack: string[];
  img: {
    src: string;
    alt: string;
  };
  imgFirst: boolean;
  link: string;
  code?: string;
}

function Project({
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
              className="project-link project-owner animated-link"
            >
              Visit Website
            </a>

            {code ? (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
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
          <img src={img.src} alt={img.alt} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="My Projects"
      className="projects"
      subTitle="These are some of the projects I worked on"
    >
      {projectsData.map(({ key, ...project }, index) => (
        <Project key={key} imgFirst={index % 2 !== 0} {...project} />
      ))}
    </Section>
  );
}
