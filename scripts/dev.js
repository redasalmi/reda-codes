const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const concurrently = require('concurrently').default;

const currentWorkingDir = process.cwd();

function npmCommand(command) {
  if (typeof command === 'string' && command) {
    return `npm run ${command}`;
  }
}

/**
 * check if the dev server is running for the first time
 * to prepare the styles and icons folders before starting development
 */
function checkFirstRun() {
  const folders = {
    'css:build': './app/styles',
    'svg:build': './app/components/icons',
  };

  Object.entries(folders).forEach(([command, folder]) => {
    const folderPath = path.join(currentWorkingDir, folder);
    const exists = fs.existsSync(folderPath);
    const isEmpty = exists && fs.readdirSync(folderPath).length === 0;

    if (!exists || isEmpty) {
      execSync(npmCommand(command), {
        stdio: 'inherit',
      });
    }
  });
}

function startDevServer() {
  concurrently(
    [
      { command: npmCommand('css:build:watch'), name: 'CSS' },
      { command: npmCommand('svg:build:watch'), name: 'SVG' },
      { command: npmCommand('dev:netlify'), name: 'DEV SERVER' },
    ],
    {
      prefix: 'name',
      killOthers: ['failure', 'success'],
      restartTries: 3,
      cwd: currentWorkingDir,
    },
  );
}

function main() {
  checkFirstRun();
  startDevServer();
}

main();
