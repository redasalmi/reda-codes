import { useFetcher, useLoaderData } from '@remix-run/react';
import { motion, AnimatePresence } from 'framer-motion';

import { Sun, Moon } from '~/components/icons';
import { themeVariants } from '~/constant';

import type { getUserTheme } from '~/cookies.server';

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

interface LoaderData {
  theme: Awaited<ReturnType<typeof getUserTheme>>;
}

export default function ThemeToggle() {
  const { theme } = useLoaderData() as LoaderData;
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/action/set-theme">
      <label hidden>
        theme toggle
        <input type="text" name="theme" value={theme} hidden readOnly />
      </label>

      <button
        type="submit"
        className="theme-btn nav-icon"
        aria-label={theme === 'light' ? 'set dark theme' : 'set light theme'}
      >
        <AnimatePresence initial={false}>
          {theme === 'light' ? (
            <MotionSun
              initial="hide"
              animate="show"
              exit="hide"
              aria-label="sun"
              className="theme-sun"
              variants={themeVariants}
            />
          ) : null}

          {theme === 'dark' ? (
            <MotionMoon
              initial="hide"
              animate="show"
              exit="hide"
              aria-label="moon"
              className="theme-moon"
              variants={themeVariants}
            />
          ) : null}
        </AnimatePresence>
      </button>
    </fetcher.Form>
  );
}
