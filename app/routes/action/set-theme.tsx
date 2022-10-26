import { json } from '@remix-run/node';

import { setUserTheme, themeCookie } from '~/cookies.server';

import type { ActionArgs } from '@remix-run/node';

export const action = async ({ request }: ActionArgs) => {
  const theme = await setUserTheme(request);

  const today = new Date().getTime();
  const year = 365 * 24 * 60 * 60 * 1000;

  return json(
    { theme },
    {
      headers: {
        'Set-Cookie': await themeCookie.serialize(theme, {
          expires: new Date(today + year),
        }),
      },
    },
  );
};
