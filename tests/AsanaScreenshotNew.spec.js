const { test, expect } = require('@playwright/test');

test('Visual regression test - full page comparison', async ({ page }) => {
  // Step 1: Navigate to the target page
  await page.goto('https://asana.com/de/pricing', { waitUntil: 'load' });

  // Step 2: Take full-page screenshot and compare with baseline
  // This will create baseline on first run and compare in subsequent runs
  const screenshot = await page.screenshot({ fullPage: true });

  await expect(screenshot).toMatchSnapshot('asana-fullpage.png', {
    maxDiffPixelRatio: 1, // allow up to 1% pixel difference
  });
});
