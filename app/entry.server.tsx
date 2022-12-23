import { renderToString } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';

import { headers } from './constant';

import type { EntryContext } from '@remix-run/node';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  );

  headers.forEach(([name, value]) => responseHeaders.set(name, value));

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
