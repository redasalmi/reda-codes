import { json } from '@remix-run/node';

import { setUserTheme, themeCookie } from '~/cookies.server';

import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const theme = await setUserTheme(request);

  return json(
    { theme },
    {
      headers: {
        'Set-Cookie': await themeCookie.serialize(theme, {
          expires: new Date('2092-01-01'),
        }),
      },
    },
  );
};
