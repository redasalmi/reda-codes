import { Form, useLoaderData } from 'remix';

import { Sun, Moon } from '~/components/icons';
import type { Theme } from '~/types';

export default function ThemeToggle() {
  const theme = useLoaderData<Theme>();

  return (
    <Form method="post">
      <input type="text" name="theme" value={theme} hidden readOnly />
      <button
        type="submit"
        className="theme-btn nav-icon"
        aria-label="theme toggle"
      >
        <Sun className={`theme-sun ${theme === 'light' ? '' : 'fade'}`} />
        <Moon className={`theme-moon ${theme === 'dark' ? '' : 'fade'}`} />
      </button>
    </Form>
  );
}
