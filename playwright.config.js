// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');
const { trace } = require('console');
const { on } = require('events');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 40000,
  expect : {
    timeout: 40000,
  },
  reporter : 'html',

  use: {
    
browserName : 'chromium' ,
headless : false ,
screenshot : 'on' ,
trace : 'on'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

});