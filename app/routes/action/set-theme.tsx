import { json } from '@remix-run/node';

import { setUserTheme, themeCookie, expiryDate } from '~/cookies.server';

import type { ActionArgs } from '@remix-run/node';

export const action = async ({ request }: ActionArgs) => {
  const theme = await setUserTheme(request);

  return json(
    { theme },
    {
      headers: {
        'Set-Cookie': await themeCookie.serialize(theme, {
          expires: expiryDate(),
        }),
      },
    },
  );
};
