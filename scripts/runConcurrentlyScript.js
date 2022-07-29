const concurrently = require('concurrently').default;

function npmCommand(command) {
  if (typeof command === 'string' && command) {
    return `npm run ${command} --silent`;
  }
}

function runConcurrentlyScript(commands) {
  const scriptCommands = commands.map(({ command, name }) => ({
    command: npmCommand(command),
    name,
  }));

  concurrently(scriptCommands, {
    prefix: 'name',
    killOthers: ['failure'],
    restartTries: 3,
    cwd: process.cwd(),
  });
}

module.exports = runConcurrentlyScript;
