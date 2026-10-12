import { test } from '@playwright/test';

test('select date from calendar list', async ({ page }) => {
    await page.goto('https://www.easemytrip.com');
    await page.locator('#dvfarecal').click();
    await page.locator('li').filter({has: page.locator('[id="29/08/2026"]')}).click();
    await page.locator('#divRtnCal').click();
    await page.locator('[id="six_1_31/08/2026"]').click();
    await page.locator('#frmcity').click();
    await page.locator('#fromautoFill').getByText('Delhi(DEL)', { exact: true }).click();
    await page.locator('#toautoFill').getByText('Bangalore(BLR)', { exact: true }).click();
    await page.getByRole('button',{name: 'Search'}).click();

const popularNonStop = page .locator('.form-check') .filter({ hasText: 'Non-stop' }).first();
await popularNonStop.locator('label').click();
await expect(popularNonStop.locator('input[type="checkbox"]')).toBeChecked();
});