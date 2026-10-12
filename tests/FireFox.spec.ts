import { test, expect, firefox } from '@playwright/test';

test('Handle alert popup in Firefox', async () => {

  // 1. Launch Firefox
  const browser = await firefox.launch({
    headless: false
  });

  // 2. Create browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // 3. Open URL first
  await page.goto('https://practice-automation.com/popups/');

  // 4. Register dialog handler before triggering the popup
  page.on('dialog', async dialog => {

    // Validate popup type
    expect(dialog.type()).toBe('alert');

    // Validate popup text
    expect(dialog.message()).toBe('Hi there, pal!');

    // Click OK
    await dialog.accept();
  });

  // 5. Trigger the alert popup
  await page.getByRole('button', { name: 'Alert Popup' }).click();

  // 6. Close browser
  await browser.close();
});