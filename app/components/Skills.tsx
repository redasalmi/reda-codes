import * as React from 'react';
import { motion } from 'framer-motion';

import { Section } from '~/components';

import useReducedAnimation from '~/hooks/useReducedAnimation';
import { skillsVariants } from '~/constant';

import type { SkillData } from '~/constant';

export function Skill({ title, iconClass, Icon }: SkillData) {
  const id = React.useId();

  return (
    <motion.div
      data-testid="skill"
      variants={skillsVariants}
      whileHover={useReducedAnimation('up')}
      className="flex h-[120px] w-[120px] flex-col items-center rounded-md bg-white p-[25px_15px_15px] font-bold shadow-[0_0_10px] shadow-dark-gray dark:bg-bg-section-dark-gray dark:shadow-bg-shadow-black"
    >
      <Icon
        role="img"
        aria-labelledby={id}
        className={`mb-[15px] h-10 w-10 ${iconClass || ''}`}
      />
      <p id={id}>{title}</p>
    </motion.div>
  );
}

interface SkillsProps {
  skills: SkillData[];
}

export default function Skills({ skills }: SkillsProps) {
  if (!skills.length) {
    return null;
  }

  return (
    <Section
      id="skills"
      title="My Skills"
      className="bg-ghost-white py-5 dark:bg-bg-section-black md:py-10 lg:py-[60px]"
      titleClassName="text-center md:text-left"
      subTitle="These are the skills I use most of the time"
    >
      <div className="mt-[30px] flex flex-wrap justify-center gap-[15px]">
        {skills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>
    </Section>
  );
}
