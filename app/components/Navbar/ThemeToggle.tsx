import { Sun, Moon } from '~/components/Icons';
import { themeToggleId } from '~/components';

export default function ThemeToggle() {
  return (
    <button
      id={themeToggleId}
      aria-live="polite"
      className="theme-btn nav-icon"
    >
      <Sun role="img" className="theme-sun" aria-label="toggle dark theme" />
      <Moon role="img" className="theme-moon" aria-label="toggle light theme" />
    </button>
  );
}
