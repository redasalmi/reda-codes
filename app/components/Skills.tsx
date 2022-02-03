import * as React from 'react';
import { motion } from 'framer-motion';

import Section from '~/components/Section';

import { skills } from '~/constant';

interface SkillProps {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
      React.RefAttributes<SVGSVGElement>
  >;
  iconClass?: string;
}

function Skill({ title, iconClass, Icon }: SkillProps) {
  return (
    <motion.div className="skill" whileHover={{ y: -10 }}>
      <Icon className={`skill-svg ${iconClass ? iconClass : ''}`} />
      <p>{title}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="My Skills"
      className="skills"
      subTitle="These are the skills I use most of the time"
    >
      <div className="skills-list">
        {skills.map(({ key, ...skill }) => (
          <Skill key={key} {...skill} />
        ))}
      </div>
    </Section>
  );
}
