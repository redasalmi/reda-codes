import { createCookie } from 'remix';
import type { Theme } from '~/types';

const userTheme = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: true,
});

const cookieResp = async (theme: Theme) =>
  new Response(theme, {
    headers: {
      'Set-Cookie': await userTheme.serialize(theme),
    },
  });

export const getuserTheme = async (headers: Headers) => {
  const cookieHeader = headers.get('Cookie');
  const theme: Theme = (await userTheme.parse(cookieHeader)) || 'light';

  return cookieResp(theme);
};

export const toggleUserTheme = async (request: Request) => {
  const formData = await request.formData();
  const theme: Theme = formData.get('theme') === 'light' ? 'dark' : 'light';

  return cookieResp(theme);
};
