import { Form } from 'remix';

import { Sun, Moon } from '~/components/icons';
import type { Theme } from '~/types';

interface ThemeToggleProps {
  theme: Theme;
  btnClassName?: string;
  sunClassName?: string;
  moonClassName?: string;
  fadeClassName?: string;
}

export default function ThemeToggle({
  theme,
  btnClassName,
  sunClassName,
  moonClassName,
  fadeClassName,
}: ThemeToggleProps) {
  return (
    <Form method="post">
      <input type="text" name="theme" value={theme} hidden readOnly />
      <button type="submit" className={btnClassName} aria-label="theme toggle">
        <Sun
          className={
            theme === 'light'
              ? sunClassName
              : `${sunClassName} ${fadeClassName}`
          }
        />
        <Moon
          className={
            theme === 'dark'
              ? moonClassName
              : `${moonClassName} ${fadeClassName}`
          }
        />
      </button>
    </Form>
  );
}
