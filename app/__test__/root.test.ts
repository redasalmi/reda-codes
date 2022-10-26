import { loader } from '~/root';

import { defaultTheme, themeCookie } from '~/cookies.server';
import type { Theme } from '~/cookies.server';

const today = new Date().getTime();
const year = 365 * 24 * 60 * 60 * 1000;

const getTheme = async (theme: string | null): Promise<Theme> => {
  const headers: HeadersInit | undefined = theme
    ? {
        Cookie: await themeCookie.serialize(theme, {
          expires: new Date(today + year),
        }),
      }
    : undefined;

  const request = new Request('http://localhost:3000/', {
    headers,
  });

  const response = (await loader({
    request,
    params: {},
    context: {},
  })) as Response;
  const actionData = (await response.json()) as Theme;

  return actionData;
};

describe('root', () => {
  it('should return light theme', async () => {
    const theme: Theme = 'light';
    const userTheme = await getTheme(theme);

    expect(userTheme).toEqual({ theme });
  });

  it('should return dark theme', async () => {
    const theme: Theme = 'dark';
    const userTheme = await getTheme(theme);

    expect(userTheme).toEqual({ theme });
  });

  it('should return default theme value', async () => {
    const theme = 'I am not a real theme value :)';
    const userTheme = await getTheme(theme);

    expect(userTheme).toEqual({ theme: defaultTheme });
  });
});
