import type { ActionFunction } from 'remix';

import { setUserTheme } from '~/cookies.server';

export const action: ActionFunction = async ({ request }) => {
  return setUserTheme(request);
};
