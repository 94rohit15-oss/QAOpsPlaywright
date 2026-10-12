import { test } from '@playwright/test';
test.use({storageState: 'auth.json' });

test ('Open project page without login', async ({ page })=> {
    await page.goto('https://app.asana.com/0/projects/browse');
});