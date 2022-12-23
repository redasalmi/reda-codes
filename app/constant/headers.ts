export const headers = [
  ['Content-Type', 'text/html'],
  ['Cache-Control', 'max-age=300, stale-while-revalidate=86400'],
  ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'],
  [
    'Content-Security-Policy',
    "default-src 'self' 'unsafe-inline'; connect-src 'self' ws://localhost:*",
  ],
  ['X-Frame-Options', 'DENY'],
  ['X-Content-Type-Options', 'nosniff'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  [
    'Permissions-Policy',
    'geolocation=(), midi=(), sync-xhr=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), fullscreen=(), payment=()',
  ],
];
