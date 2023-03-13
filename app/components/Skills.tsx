import * as React from 'react';
import { motion } from 'framer-motion';

import { Section } from '~/components';

import useReducedAnimation from '~/hooks/useReducedAnimation';

import type { SkillData } from '~/constant';

export function Skill({ title, iconClass, Icon }: SkillData) {
  const id = React.useId();

  return (
    <motion.div
      data-testid="skill"
      whileHover={useReducedAnimation({ y: -10 })}
      className="flex h-[120px] w-[120px] flex-col items-center rounded-md bg-bg-secondary p-[25px_15px_15px] font-bold shadow-[0_0_10px] shadow-shadow-primary dark:bg-bg-secondary-dark dark:shadow-shadow-primary-dark"
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
      className="bg-bg-primary py-5 dark:bg-bg-primary-dark md:py-10 lg:py-[60px]"
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
