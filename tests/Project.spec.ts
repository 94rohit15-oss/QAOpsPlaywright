import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Create Asana private project via UI', async ({ browser }) => {
  const authFilePath = path.resolve(__dirname, '../auth.json');
  const authContent = JSON.parse(fs.readFileSync(authFilePath, 'utf8'));
  const asanaCookies = (authContent.cookies || []).filter((cookie: { domain?: string }) => {
    const domain = (cookie.domain || '').replace(/^\./, '');
    return domain.includes('asana.com');
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1200 },
  });

  await context.addCookies(asanaCookies);
  const page = await context.newPage();

  await page.goto('https://app.asana.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  await page.getByText('Create project', { exact: true }).click();
  await page.getByText('Project name', { exact: true }).waitFor();

  const projectName = `Private project ${Date.now()}`;
  await page.locator('input').first().fill(projectName);

  await page.getByText('Private', { exact: true }).click();
  await page.getByRole('button', { name: /^Continue$/i }).click();

  await expect(page.getByText(projectName, { exact: true }).first()).toBeVisible({ timeout: 30000 });

  console.log(`Created Asana project: ${projectName}`);
  await context.close();
});
