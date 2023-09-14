const light = 'light';
const dark = 'dark';

const themeKey = 'theme';
const themeToggleId = 'theme-toggle';
const themeDataAtt = 'data-theme';

function getThemePreference() {
	const storedTheme = localStorage.getItem(themeKey);

	if (storedTheme) {
		return storedTheme;
	}

	return window.matchMedia(`(prefers-color-scheme: ${dark})`).matches
		? dark
		: light;
}

function setThemePreference(theme) {
	localStorage.setItem(`${themeKey}`, theme);
	reflectThemePreference();
}

function reflectThemePreference() {
	const theme = getThemePreference();
	if (theme === dark) {
		document.firstElementChild?.classList.add(theme);
	} else {
		document.firstElementChild?.classList.remove(dark);
	}

	document
		.querySelector(`#${themeToggleId}`)
		?.setAttribute(`${themeDataAtt}`, theme);
}

function toggleTheme() {
	const theme = getThemePreference();
	const newTheme = theme === dark ? light : dark;
	setThemePreference(newTheme);
}

reflectThemePreference();

window.__theme__ = {
	toggleTheme,
	reflectThemePreference,
};

window
	.matchMedia(`(prefers-color-scheme: ${dark})`)
	.addEventListener('change', ({ matches: isDark }) => {
		const theme = isDark ? dark : light;
		setThemePreference(theme);
	});
