import * as React from 'react';
import { useAnimate, useReducedMotion } from 'framer-motion';

import { hideIcon, showIcon } from '~/constant';
import moon from '~/assets/icons/moon.svg';
import sun from '~/assets/icons/sun.svg';

const light = 'light';
const dark = 'dark';
const themes = [light, dark] as const;
type Theme = (typeof themes)[number];

const sunId = 'sun';
const moonId = 'moon';

const themeKey = 'theme';
const themeToggleId = 'theme-toggle';
const themeDataAtt = 'data-theme';

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
  if (theme === '${dark}') {
    document.firstElementChild?.classList.add(theme);
  } else {
    document.firstElementChild?.classList.remove('${dark}');
  }
  document.querySelector('#${themeToggleId}')?.setAttribute('${themeDataAtt}', theme);
}

function toggleTheme() {
  const theme = getThemePreference();
  const newTheme = theme === '${dark}' ? '${light}' : '${dark}';
  setThemePreference(newTheme);
}

reflectThemePreference();

window.__theme__ = {
	toggleTheme,
	reflectThemePreference
};

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

export function ThemeToggle() {
	const shouldReduceMotion = useReducedMotion();
	const [btnRef, animate] = useAnimate<HTMLButtonElement>();

	React.useEffect(() => {
		const toggleBtn = btnRef.current;

		const animateIcons = () => {
			if (!shouldReduceMotion) {
				const theme = toggleBtn.getAttribute(themeDataAtt) as Theme | null;

				if (theme) {
					if (theme === dark) {
						animate(`#${sunId}`, hideIcon.animation, hideIcon.transition);
						animate(`#${moonId}`, showIcon.animation, showIcon.transition);
					} else {
						animate(`#${sunId}`, showIcon.animation, showIcon.transition);
						animate(`#${moonId}`, hideIcon.animation, hideIcon.transition);
					}
				}
			}
		};

		const updateTheme = () => {
			window.__theme__.toggleTheme();
			animateIcons();
		};

		window.__theme__.reflectThemePreference();
		animateIcons();

		toggleBtn.addEventListener('click', updateTheme);
		window
			.matchMedia(`(prefers-color-scheme: ${dark})`)
			.addEventListener('change', updateTheme);

		return () => {
			toggleBtn.removeEventListener('click', updateTheme);
			window
				.matchMedia(`(prefers-color-scheme: ${dark})`)
				.removeEventListener('change', updateTheme);
		};
	}, [shouldReduceMotion, btnRef, animate]);

	return (
		<button
			ref={btnRef}
			id={themeToggleId}
			aria-live="polite"
			className="relative flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full border-2 border-fg-black bg-none dark:border-fg-white"
		>
			<img
				src={sun}
				alt="sun"
				id={sunId}
				aria-label="toggle dark theme"
				className="absolute h-[32px] w-[32px] invert-0 dark:hidden dark:invert"
			/>
			<img
				src={moon}
				alt="moon"
				id={moonId}
				aria-label="toggle light theme"
				className="absolute hidden h-[28px] w-[28px] invert-0 dark:block dark:invert"
			/>
		</button>
	);
}
