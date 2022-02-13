import type { ActionFunction } from 'remix';

import { setUserTheme } from '~/cookies';

export const action: ActionFunction = async ({ request }) => {
  return setUserTheme(request);
};
