import { renderToString } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';

import setHeaders from '~/utils/headers';
import type { EntryContext, HandleDataRequestFunction } from '@remix-run/node';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  );

  setHeaders(responseHeaders, 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

export const handleDataRequest: HandleDataRequestFunction = (
  response: Response,
) => {
  setHeaders(response.headers);

  return response;
};
