import { createCookie } from '@remix-run/node';
import invariant from 'tiny-invariant';

const COOKIE_SECRET = process.env.COOKIE_SECRET;
invariant(COOKIE_SECRET, 'COOKIE_SECRET must be set');

export type Theme = 'light' | 'dark';
const defaultTheme = 'light';

const isTheme = (theme: string): theme is Theme => {
  return (theme as Theme) !== undefined;
};

export const themeCookie = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secrets: [COOKIE_SECRET],
  secure: process.env.NODE_ENV === 'production',
});

export const getUserTheme = async (headers: Headers): Promise<Theme> => {
  const cookieHeader = headers.get('Cookie');
  const theme = (await themeCookie.parse(cookieHeader)) as Theme | null;

  if (!theme) {
    return defaultTheme;
  }

  return theme;
};

export const setUserTheme = async (request: Request): Promise<Theme> => {
  const formData = await request.formData();
  const theme = formData.get('theme');

  if (!theme) {
    return defaultTheme;
  }

  invariant(
    typeof theme === 'string' && isTheme(theme),
    'theme must be of type Theme',
  );

  return theme === 'light' ? 'dark' : 'light';
};
