/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: [
      'dotenv/config',
      './test/setup-test-env.ts',
      './test/setup-test.ts',
    ],
    include: ['./app/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    watchExclude: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
  },
});
