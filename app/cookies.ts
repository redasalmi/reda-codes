import { createCookie, json } from 'remix';
import type { Theme, ThemeData } from '~/types';

const userTheme = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: true,
  expires: new Date('2092-01-01'),
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
