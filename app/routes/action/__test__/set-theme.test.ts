import { action } from '~/routes/action/set-theme';
import { defaultTheme } from '~/cookies.server';

import type { Theme } from '~/cookies.server';

const setTheme = async (
  theme: string,
): Promise<{ newTheme: Theme; hasSetThemeCookie: boolean }> => {
  const formData = new FormData();
  formData.append('theme', theme);

  const request = new Request('http://localhost:3000/action/set-theme', {
    method: 'POST',
    body: formData,
  });

  const response = (await action({
    request,
    params: {},
    context: {},
  })) as Response;

  const newTheme = (await response.json()) as Theme;
  const hasSetThemeCookie =
    response.headers.get('Set-Cookie')?.search('theme') !== -1;

  return {
    newTheme,
    hasSetThemeCookie,
  };
};

describe('/action/set-theme', () => {
  it('should set user theme to light mode', async () => {
    const theme: Theme = 'light';
    const { newTheme } = await setTheme(theme);

    expect(newTheme).toEqual({ theme });
  });

  it('should set user theme to dark mode', async () => {
    const theme: Theme = 'dark';
    const { newTheme } = await setTheme(theme);

    expect(newTheme).toEqual({ theme });
  });

  it('should return default theme value', async () => {
    const theme = 'I am not a real theme value :)';
    const { newTheme } = await setTheme(theme);

    expect(newTheme).toEqual({ theme: defaultTheme });
  });

  it('should set cookie theme', async () => {
    const theme: Theme = 'dark';
    const { hasSetThemeCookie } = await setTheme(theme);

    expect(hasSetThemeCookie).toBeTruthy();
  });
});
