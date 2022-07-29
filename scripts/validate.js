const runConcurrentlyScript = require('./runConcurrentlyScript');

runConcurrentlyScript([
  { command: 'lint', name: 'lint' },
  { command: 'stylelint', name: 'stylelint' },
  { command: 'typecheck', name: 'typecheck' },
  { command: 'test:ci', name: 'test' },
  { command: 'build:remix', name: 'build' },
]);
