import { useFetcher, useLoaderData } from '@remix-run/react';
import { motion, AnimatePresence } from 'framer-motion';

import { Sun, Moon } from '~/components/icons';
import { themeVariants } from '~/constant';

import type { getUserTheme, Theme } from '~/cookies.server';

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

interface LoaderData {
  theme: Awaited<ReturnType<typeof getUserTheme>>;
}

export default function ThemeToggle() {
  const { theme } = useLoaderData() as LoaderData;
  const fetcher = useFetcher();

  const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <fetcher.Form method="post" action="/action/set-theme">
      <label hidden>
        theme toggle
        <input type="text" name="theme" value={newTheme} hidden readOnly />
      </label>

      <button type="submit" className="theme-btn nav-icon">
        <AnimatePresence initial={false}>
          {theme === 'light' ? (
            <MotionSun
              initial="hide"
              animate="show"
              exit="hide"
              role="img"
              className="theme-sun"
              variants={themeVariants}
              aria-label="toggle light theme"
            />
          ) : null}

          {theme === 'dark' ? (
            <MotionMoon
              initial="hide"
              animate="show"
              exit="hide"
              role="img"
              className="theme-moon"
              variants={themeVariants}
              aria-label="toggle dark theme"
            />
          ) : null}
        </AnimatePresence>
      </button>
    </fetcher.Form>
  );
}
