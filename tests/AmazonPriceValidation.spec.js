import { test, expect } from '@playwright/test';

test('Validate subtotal after increasing quantity', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    // Search product
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Running shoe');
    await page.getByRole('button', { name: 'running shoes puma' }).click();

    // Locate required product
    const product = page.locator('[data-component-type="s-search-result"]').filter({
        has: page.getByRole('heading', {
            name: 'Men Snatch V2 Sneaker'
        })
    });

    

    // Read product price
    const priceText = await product.locator('.a-price-whole').textContent();
    //priceText = ₹2,624 

    // Convert ₹2,624 -> 2624
    const unitPrice = Number(priceText.replace(/,/g, ''));
    // unitPrice = 2624
    console.log("Unit Price :", unitPrice);

    // Add to Cart
    await product.getByRole('button', { name: 'Add to cart' }).click();
    await product.getByRole('button', { name: 'Add to cart' }).click();


    // Open Cart
    await page.getByRole('link', { name: 'Go to Cart' }).click();

    // Increase quantity to n
    const quantity = 10

    for (let i = 1; i < quantity; i++) {
        await page.locator('[data-a-selector="increment"]').click(); //css
        //await page.locator("//span[@data-a-selector='increment-icon']").click();  //xpath , use one 
    }

    // Read subtotal : CSS used
    const subtotalText = await page
        .locator('#sc-subtotal-amount-activecart')
        .textContent();

    const actualSubtotal = Number(
        subtotalText.replace(/[₹,]/g, '')
    );

    // Expected subtotal
    const expectedSubtotal = unitPrice * quantity;

    console.log("Expected :", expectedSubtotal);
    console.log("Actual :", actualSubtotal);

    // Validation
    expect(actualSubtotal).toBe(expectedSubtotal);

});