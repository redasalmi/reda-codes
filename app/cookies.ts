import { createCookie } from 'remix';

const userTheme = createCookie('theme', {
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: true,
});

const cookieResp = async (theme: string) =>
  new Response(theme, {
    headers: {
      'Set-Cookie': await userTheme.serialize(theme),
    },
  });

export const getuserTheme = async (headers: Headers) => {
  const cookieHeader = headers.get('Cookie');
  const theme: string = (await userTheme.parse(cookieHeader)) || 'light';

  return cookieResp(theme);
};

export const toggleUserTheme = async (request: Request) => {
  const formData = await request.formData();
  const theme = formData.get('theme') === 'light' ? 'dark' : 'light';

  return cookieResp(theme);
};
