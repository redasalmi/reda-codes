import * as React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import { Moon, Sun } from './Icons';
import { themeVariants } from '~/constant';

const light = 'light';
const dark = 'dark';
const themes = [light, dark] as const;
type Theme = typeof themes[number];

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
  const sunControls = useAnimationControls();
  const moonControls = useAnimationControls();

  const toggleSvg = React.useCallback(() => {
    const theme = localStorage?.getItem(themeKey) as Theme | null;

    if (theme) {
      sunControls.start(theme === dark ? 'hide' : 'show');
      moonControls.start(theme === light ? 'hide' : 'show');
    }
  }, [sunControls, moonControls]);

  React.useEffect(() => {
    toggleSvg();
    const toggleBtn = btnRef.current;
    toggleBtn.addEventListener('click', toggleSvg);

    return () => {
      toggleBtn.removeEventListener('click', toggleSvg);
    };
  }, [toggleSvg]);

  return (
    <button
      ref={btnRef}
      id={themeToggleId}
      aria-live="polite"
      className="theme-btn nav-icon"
    >
      <MotionSun
        role="img"
        animate={sunControls}
        variants={themeVariants}
        className="theme-svg theme-sun"
        aria-label="toggle dark theme"
      />
      <MotionMoon
        role="img"
        animate={moonControls}
        variants={themeVariants}
        className="theme-svg theme-moon"
        aria-label="toggle light theme"
      />
    </button>
  );
}
