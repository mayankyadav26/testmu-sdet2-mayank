import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: 1,
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright', {
      outputFolder: 'allure-results'
    }]
  ],

  use: {

    baseURL: 'https://www.saucedemo.com',

    headless: true,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure'
  },

  projects: [

  {
    name: 'chromium',
    testMatch: /.*ui.*\.spec\.ts/,
    use: {
      ...devices['Desktop Chrome']
    }
  },

  {
    name: 'firefox',
    testMatch: /.*ui.*\.spec\.ts/,
    use: {
      ...devices['Desktop Firefox']
    }
  },

  {
    name: 'webkit',
    testMatch: /.*ui.*\.spec\.ts/,
    use: {
      ...devices['Desktop Safari']
    }
  },

  {
    name: 'api',
    testMatch: /.*api.*\.spec\.ts/
  },

  {
    name: 'integration',
    testMatch: /.*integration.*\.spec\.ts/
  }
 ]
});