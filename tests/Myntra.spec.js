import { test, expect } from '@playwright/test';


test ('Snapdeal search', async ({ page }) => {

await page.goto('https://www.snapdeal.com/');
await page.locator('.search-box-input').fill('sport shoe');
await page.keyboard.press('Enter');

const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByText("Action Shoes Gray Men's Sports Running Shoes").click()
]);
await newPage.waitForLoadState();

// Read product price
const priceText = await newPage.locator('.pdp-final-price').textContent();
const unitPrice = Number(priceText.replace(/,/g, ''));
console.log('Unit Price :', unitPrice);

await newPage.getByText('buy now').click();
await newPage.getByText('Continue').click();

});
