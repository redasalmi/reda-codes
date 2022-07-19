import { motion, useReducedMotion } from 'framer-motion';

import { Section } from '~/components';

import type { SkillData } from '~/constant';

function Skill({ id, title, iconClass, Icon }: SkillData) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="skill"
      whileHover={shouldReduceMotion ? undefined : { y: -10 }}
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
