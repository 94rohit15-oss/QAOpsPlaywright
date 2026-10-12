import { test, expect } from '@playwright/test';
test('Amazon search validation', async ({page}) => {

await page.goto('https://www.amazon.in/');
await page.getByRole('button', {name: 'Continue shopping'}).click();

const searchText = 'Laptop';

await page.getByRole('searchbox', {name: 'Search Amazon.in'}).fill(searchText);
await page.locator('#nav-search-submit-button').click();
await expect(page).toHaveURL(/Laptop/i);
await expect(page.locator('span.a-color-state')).toContainText(searchText);
});
