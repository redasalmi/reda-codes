import * as React from 'react';
import { useFetcher, useLoaderData } from 'remix';
import { motion, AnimatePresence } from 'framer-motion';

import { Sun, Moon } from '~/components/icons';

import { themeVariants } from '~/constant';
import type { ThemeData } from '~/types';

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

export default function ThemeToggle() {
  const [animate, setAnimate] = React.useState(false);
  const { theme } = useLoaderData<ThemeData>();
  const fetcher = useFetcher();

  React.useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <fetcher.Form method="post" action="/action/set-theme">
      <input type="text" name="theme" value={theme} hidden readOnly />
      <button
        type="submit"
        className="theme-btn nav-icon"
        aria-label="theme toggle"
      >
        {animate ? (
          <AnimatePresence initial={false}>
            {theme === 'light' ? (
              <MotionSun
                initial="hide"
                animate="show"
                exit="hide"
                className="theme-sun"
                variants={themeVariants}
              />
            ) : null}

            {theme === 'dark' ? (
              <MotionMoon
                initial="hide"
                animate="show"
                exit="hide"
                className="theme-moon"
                variants={themeVariants}
              />
            ) : null}
          </AnimatePresence>
        ) : (
          <>
            {theme === 'light' ? <Sun className="theme-sun" /> : null}
            {theme === 'dark' ? <Moon className="theme-moon" /> : null}
          </>
        )}
      </button>
    </fetcher.Form>
  );
}
