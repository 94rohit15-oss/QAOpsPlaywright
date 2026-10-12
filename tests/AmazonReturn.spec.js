import { test, expect } from '@Playwright/test';

test('Amazon return cart', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator("//a[@id='nav-orders']/span[contains(text(),'Returns')]").click();
    await page.getByLabel('Enter mobile number or email').fill('7003514788');
    await page.getByRole('button', { name: ' Continue' }).click();
    await page.getByRole('button', { name: 'Get an OTP on your phone' }).click();
    await page.getByRole('link', { name: '8 items in cart' }).click();

    const item = page.locator(".sc-list-item").filter({
        has: page.getByText("Labnoft Men PU Leather Reversible Belt, Black")
    });
    await expect(item).toBeVisible();
    const priceText = await item.locator(".sc-product-price").textContent();
    const price = parseInt(priceText.replace(/[₹,]/g, ""));
    console.log("Product Price:", price);


})
