import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './', // Root directory for tests
  timeout: 30000, // Maximum time one test can run
  retries: 1, // Number of retries for a failed test
  projects: [
    {
      name: 'API Tests',
      testDir: 'api/tests', // Directory for API tests
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'on',
      },
    },
    {
      name: 'Web Tests',
      testDir: 'web/tests', // Directory for Web tests
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'on',
      },
    },
  ],
  use: {
    headless: true, // Default settings for all projects
    screenshot: 'on',
    video: 'on',
  },
});
