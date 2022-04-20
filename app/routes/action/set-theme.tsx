import type { ActionFunction } from '@remix-run/node';

import { setUserTheme } from '~/cookies.server';

export const action: ActionFunction = async ({ request }) => {
  return setUserTheme(request);
};
