const path = require('path');

const app = path.join(__dirname, 'app');

/**
 * @type {import('ts-jest').InitialOptionsTsJest}
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resetMocks: true,
  roots: [app],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^~/(.*)$': `${app}/$1`,
  },
};
