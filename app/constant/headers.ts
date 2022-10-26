export const headers = [
  ['Cache-Control', 'public, max-age=31536000, s-maxage=31536000'],
  ['Content-Type', 'text/html'],
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
