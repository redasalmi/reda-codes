import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';

hydrateRoot(
  document,
  <React.StrictMode>
    <RemixBrowser />
  </React.StrictMode>,
);
