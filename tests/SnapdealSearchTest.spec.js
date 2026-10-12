import { test, expect } from '@playwright/test';

test('Snapdeal search test', async ({ page }) => {

    // Open Snapdeal
    await page.goto('https://www.snapdeal.com/');

    // Search product
    await page.locator('.search-box-input').fill('sport shoe');
    await page.keyboard.press('Enter');

    // Wait for search results
    await page.waitForLoadState('networkidle');

    // Click product and capture newly opened tab
    const [productPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByText("Action Shoes Gray Men's Sports Running Shoes").click()
    ]);

    // Wait for product page to load
    await productPage.waitForLoadState('networkidle');

    // Read product price
    const priceText = await productPage.locator('.payBlkBig').textContent();

    const unitPrice = Number(priceText);

    console.log("Unit Price :", unitPrice);




await productPage.locator('#rzp-buy-button-id').click();
await productPage.locator('iframe.razorpay-checkout-frame').waitFor();
const frame = productPage.frameLocator('iframe.razorpay-checkout-frame');
await frame.getByRole('button', { name: 'Continue' }).click();
await frame.locator('#redesign-v15-cta').click();
await expect(page.getByText("Enter a valid mobile number.")).toBeVisible();



});