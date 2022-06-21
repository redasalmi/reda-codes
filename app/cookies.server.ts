import { createCookie } from '@remix-run/node';
import invariant from 'tiny-invariant';

import { Theme } from '~/types';

const COOKIE_SECRET = process.env.COOKIE_SECRET;
invariant(COOKIE_SECRET, 'COOKIE_SECRET must be set');

export const themeCookie = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secrets: [COOKIE_SECRET],
  expires: new Date('2092-01-01'),
  secure: process.env.NODE_ENV === 'production',
});

export const getUserTheme = async (headers: Headers) => {
  const cookieHeader = headers.get('Cookie');
  const theme = (await themeCookie.parse(cookieHeader)) as Theme | null;

  if (!theme) {
    return Theme.LIGHT;
  }

  return theme;
};

export const setUserTheme = async (request: Request) => {
  const formData = await request.formData();
  const theme = formData.get('theme');

  if (!theme) {
    return Theme.LIGHT;
  }

  invariant(typeof theme === 'string', 'theme must be a string');

  return theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
};
