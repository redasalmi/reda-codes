import { motion } from 'framer-motion';

import {
  projectsData,
  projectVariants,
  projectFirstVariant,
  projectLastVariant,
} from '~/constant';

interface ProjectProps {
  title: string;
  owner?: string;
  ownerLink?: string;
  desc: string;
  techStack: string[];
  img: string;
  imgAlt: string;
  imgFirst: boolean;
  link: string;
  code?: string;
}

function Project({
  title,
  owner,
  ownerLink,
  desc,
  techStack,
  img,
  imgAlt,
  imgFirst,
  link,
  code,
}: ProjectProps) {
  const projectInfo = {
    variants: imgFirst ? projectLastVariant : projectFirstVariant,
    transition: { duration: 2 },
    className: `project-border project-card ${
      imgFirst ? 'project-last-card' : 'project-first-card'
    }`,
  };

  const projectImg = {
    variants: imgFirst ? projectFirstVariant : projectLastVariant,
    transition: { duration: 2 },
    className: `project-border project-card ${
      imgFirst ? 'project-first-card' : 'project-last-card'
    }`,
  };

  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={projectVariants}
      viewport={{ once: true }}
      transition={{
        duration: 2,
        boxShadow: { delay: 1.7, duration: 1 },
      }}
      className="project project-border"
    >
      <motion.div {...projectInfo}>
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
                    href={ownerLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {owner}
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
              className="project-link project-owner"
            >
              Visit Website
            </a>

            {code ? (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="project-link source-code"
              >
                Source code
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>

      <motion.div {...projectImg}>
        <div className="project-border project-img">
          <img src={img} alt={imgAlt} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className=" projects">
      <div className="container">
        <h2>My Projects</h2>

        {projectsData.map(({ key, ...project }, index) => (
          <Project key={key} imgFirst={index % 2 !== 0} {...project} />
        ))}
      </div>
    </section>
  );
}
