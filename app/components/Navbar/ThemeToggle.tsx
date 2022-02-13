import { useFetcher, useLoaderData } from 'remix';
import { motion } from 'framer-motion';

import { Sun, Moon } from '~/components/icons';

import { themeVariants } from '~/constant';
import type { ThemeData } from '~/types';

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

export default function ThemeToggle() {
  const { theme } = useLoaderData<ThemeData>();
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/action/set-theme">
      <input type="text" name="theme" value={theme} hidden readOnly />
      <button
        type="submit"
        className="theme-btn nav-icon"
        aria-label="theme toggle"
      >
        <MotionSun
          initial="sun"
          animate="sun"
          custom={theme}
          className="theme-sun"
          variants={themeVariants}
        />
        <MotionMoon
          initial="moon"
          animate="moon"
          custom={theme}
          className="theme-moon"
          variants={themeVariants}
        />
      </button>
    </fetcher.Form>
  );
}
