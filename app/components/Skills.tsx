import * as React from 'react';
import { motion } from 'framer-motion';

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
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <p>These are the skills I use most of the time</p>

        <div className="skills-list">
          {skills.map(({ key, ...skill }) => (
            <Skill key={key} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
