import { motion } from 'framer-motion';

import { Section } from '~/components';

import { useReducedAnimation } from '~/utils';
import type { SkillData } from '~/constant';

export function Skill({ id, title, iconClass, Icon }: SkillData) {
  return (
    <motion.div
      className="skill"
      data-testid="skill"
      whileHover={useReducedAnimation({ y: -10 })}
    >
      <Icon
        role="img"
        aria-labelledby={id}
        className={`skill-svg ${iconClass ? iconClass : ''}`}
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
      className="skills"
      subTitle="These are the skills I use most of the time"
    >
      <div className="skills-list">
        {skills.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </Section>
  );
}
