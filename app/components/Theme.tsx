import * as React from 'react';
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';

import { Moon, Sun } from '~/components/Icons';
import useReducedAnimation from '~/hooks/useReducedAnimation';
import { themeVariants } from '~/constant';

const light = 'light';
const dark = 'dark';
const themes = [light, dark] as const;
type Theme = (typeof themes)[number];

const themeKey = 'theme';
const themeToggleId = 'theme-toggle';

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
function getThemePreference() {
  const storedTheme = localStorage.getItem('${themeKey}');

  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: ${dark})').matches
    ? '${dark}'
    : '${light}';
}

function setThemePreference(theme) {
  localStorage.setItem('${themeKey}', theme);
  reflectThemePreference();
}

function reflectThemePreference() {
  const theme = getThemePreference();
  document.firstElementChild?.setAttribute('data-theme', theme);
  if (theme === '${dark}') {
    document.firstElementChild?.classList.add(theme);
  } else {
    document.firstElementChild?.classList.remove('${dark}');
  }
  document.querySelector('#${themeToggleId}')?.setAttribute('aria-label', theme);
}

function toggleTheme() {
  const theme = getThemePreference();
  const newTheme = theme === '${dark}' ? '${light}' : '${dark}';
  setThemePreference(newTheme);
}

reflectThemePreference();

window.addEventListener('load', () => {
  reflectThemePreference();

  document
    .querySelector('#${themeToggleId}')
    .addEventListener('click', toggleTheme)
});

window
  .matchMedia('(prefers-color-scheme: ${dark})')
  .addEventListener('change', ({ matches:isDark }) => {
    const theme = isDark ? '${dark}' : '${light}'
    setThemePreference(theme)
  })
`,
      }}
    />
  );
}

const MotionSun = motion(Sun);
const MotionMoon = motion(Moon);

export function ThemeToggle() {
  const btnRef = React.useRef<HTMLButtonElement>(null!);
  const shouldReduceMotion = useReducedMotion();
  const sunControls = useAnimationControls();
  const moonControls = useAnimationControls();

  React.useEffect(() => {
    if (!shouldReduceMotion) {
      const toggleSvg = () => {
        const theme = btnRef.current.getAttribute('aria-label') as Theme | null;

        if (theme) {
          sunControls.start(theme === dark ? 'hide' : 'show');
          moonControls.start(theme === light ? 'hide' : 'show');
        }
      };

      toggleSvg();
      const toggleBtn = btnRef.current;
      toggleBtn.addEventListener('click', toggleSvg);
      window
        .matchMedia('(prefers-color-scheme: dark')
        .addEventListener('change', toggleSvg);

      return () => {
        toggleBtn.removeEventListener('click', toggleSvg);
        window
          .matchMedia('(prefers-color-scheme: dark')
          .removeEventListener('change', toggleSvg);
      };
    }
  }, [shouldReduceMotion, sunControls, moonControls]);

  return (
    <button
      ref={btnRef}
      id={themeToggleId}
      aria-live="polite"
      className="relative flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-2 border-fg-primary bg-none dark:border-fg-primary-dark"
    >
      <MotionSun
        role="img"
        aria-label="toggle dark theme"
        animate={useReducedAnimation(sunControls)}
        variants={useReducedAnimation(themeVariants)}
        className="absolute h-[25px] w-[25px] dark:hidden"
      />
      <MotionMoon
        role="img"
        aria-label="toggle light theme"
        animate={useReducedAnimation(moonControls)}
        variants={useReducedAnimation(themeVariants)}
        className="absolute hidden h-[25px] w-[25px] dark:block"
      />
    </button>
  );
}
