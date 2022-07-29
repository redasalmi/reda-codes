const runConcurrentlyScript = require('./runConcurrentlyScript');

runConcurrentlyScript([
  { command: 'css:build:watch', name: 'css' },
  { command: 'svg:build:watch', name: 'svg' },
  { command: 'dev:netlify', name: 'dev-server' },
]);
