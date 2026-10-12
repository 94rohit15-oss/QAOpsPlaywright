const { test } = require('@playwright/test');

test('take full page screenshot', async ({ page }) => {
  await page.goto('https://asana.com/product', { waitUntil: 'load' });

  await page.screenshot({ 
    path: '/Users/rohit/Desktop/product.png', 
    fullPage: true 
  });
});
