import { createCookie } from '@remix-run/node';
import invariant from 'tiny-invariant';

const COOKIE_SECRET = process.env.COOKIE_SECRET;
invariant(COOKIE_SECRET, 'COOKIE_SECRET must be set');

const themes = ['light', 'dark'] as const;
export type Theme = typeof themes[number];
export const defaultTheme = themes[0];
export const cookieMaxAge = 365 * 24 * 60 * 60;

const isTheme = (theme: any): theme is Theme => {
  return themes.includes(theme);
};

export const themeCookie = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secrets: [COOKIE_SECRET],
  maxAge: cookieMaxAge,
  secure: process.env.NODE_ENV === 'production',
});

export const getUserTheme = async (headers: Headers): Promise<Theme> => {
  const cookieHeader = headers.get('Cookie');
  const theme = (await themeCookie.parse(cookieHeader)) as Theme | null;

  if (!theme || !isTheme(theme)) {
    return defaultTheme;
  }

  return theme;
};

export const setUserTheme = async (request: Request): Promise<Theme> => {
  const formData = await request.formData();
  const theme = formData.get('theme');

  invariant(typeof theme === 'string', 'theme must be of type Theme');

  if (!theme || !isTheme(theme)) {
    return defaultTheme;
  }

  return theme;
};
