const themeKey = 'theme';
const light = 'light';
const dark = 'dark';
export const themeToggleId = 'theme-toggle';

export default function ThemeScript() {
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
