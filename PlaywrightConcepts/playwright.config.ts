import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries:  1,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60000, // Set the maximum time one test can run for. By default, tests are automatically killed after 30 seconds, if they are not finished by then. You can adjust this value based on your needs.
  
  expect: {
    timeout: 10000, // Set the maximum time expect() should wait for the condition to be met. By default, expect() will wait for 5 seconds. You can adjust this value based on your needs.
  },


  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
     baseURL: 'https://playground.bsparksoftwaretechnologies.com/playwright-automation',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on-first-retry', // Record video only when a test fails and is retried.
    headless: false, // Run tests in headed mode. nothing but browser can be seen visually
    storageState: './storage/auth.json' //Its used to login to application without entereing username and password

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'QA',
      use: { ...devices['Desktop Chrome'],

       },
       
    },

    //  {
    //   name: 'SuperAdmin',
    //   use: { ...devices['Desktop Chrome'],
    //      storageState: './storage/SuperAdmin_auth.json' 
        
    //    },
       
    // },

    //  {
    //   name: 'STG',
    //   use: { ...devices['Desktop Chrome'],
       
    //    },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
