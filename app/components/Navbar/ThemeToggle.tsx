import { Form, useLoaderData } from 'remix';
import { motion } from 'framer-motion';

import { Sun, Moon } from '~/components/icons';
import type { ThemeData } from '~/types';

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

export default function ThemeToggle() {
  const { theme } = useLoaderData<ThemeData>();

  const variants = {
    sun: { opacity: theme === 'light' ? 1 : 0 },
    moon: { opacity: theme === 'dark' ? 1 : 0 },
  };

  return (
    <Form method="post">
      <input type="text" name="theme" value={theme} hidden readOnly />
      <button
        type="submit"
        className="theme-btn nav-icon"
        aria-label="theme toggle"
      >
        <MotionSun
          initial="sun"
          animate="sun"
          variants={variants}
          transition={{ duration: 0.1 }}
          className="theme-sun"
        />
        <MotionMoon
          initial="moon"
          animate="moon"
          variants={variants}
          transition={{ duration: 0.1 }}
          className="theme-moon"
        />
      </button>
    </Form>
  );
}
