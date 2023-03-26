import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';

const hydrate = () =>
	React.startTransition(() => {
		hydrateRoot(
			document,
			<React.StrictMode>
				<RemixBrowser />
			</React.StrictMode>,
		);
	});

if (window.requestIdleCallback) {
	window.requestIdleCallback(hydrate);
} else {
	// Safari doesn't support requestIdleCallback
	// https://caniuse.com/requestidlecallback
	window.setTimeout(hydrate, 1);
}
