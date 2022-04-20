import { createCookie, json } from '@remix-run/node';
import invariant from 'tiny-invariant';

import type { Theme, ThemeData } from '~/types';

const COOKIE_SECRET = process.env.COOKIE_SECRET;
invariant(COOKIE_SECRET, 'COOKIE_SECRET must be set');

const userTheme = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secrets: [COOKIE_SECRET],
  expires: new Date('2092-01-01'),
  secure: process.env.NODE_ENV === 'production',
});

export const getuserTheme = async (headers: Headers) => {
  const cookieHeader = headers.get('Cookie');
  const theme: Theme = (await userTheme.parse(cookieHeader)) || 'light';

  return json<ThemeData>({ theme });
};

export const setUserTheme = async (request: Request) => {
  const formData = await request.formData();
  const theme: Theme = formData.get('theme') === 'light' ? 'dark' : 'light';

  return json<ThemeData>(
    { theme },
    {
      headers: {
        'Set-Cookie': await userTheme.serialize(theme),
      },
    },
  );
};
