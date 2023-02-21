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
      className="font-bold rounded-md flex flex-col items-center w-[120px] h-[120px] p-[25px_15px_15px] bg-bg-secondary dark:bg-bg-secondary-dark shadow-[0_0_10px_var(--shadow-primary)]"
    >
      <Icon
        role="img"
        aria-labelledby={id}
        className={`w-10 h-10 mb-[15px] ${iconClass || ''}`}
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
      className="py-5 md:py-10 lg:py-[60px]"
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
