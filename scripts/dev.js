const runConcurrentlyScript = require('./runConcurrentlyScript');

runConcurrentlyScript([
  { command: 'css:build:watch', name: 'css' },
  { command: 'dev:netlify', name: 'dev-server' },
]);
