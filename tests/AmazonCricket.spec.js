import {test,expect}from'@playwright/test';

test('Amazon cricket search', async({page}) =>{
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', { name:'Search Amazon.in'}).fill('cricket bat');
    await page.getByRole('button', {name:'cricket bat kashmir willow'}).click();

    // Locate required product
    const product = page.locator("[data-component-type='s-search-result']").filter({
    has: page.getByRole('heading', {
        name: /BATRIX Strike X Grade/
    })
});

const priceText = await product.locator('.a-price-whole').textContent();
const unitPrice = Number(priceText.replace(/,/g, ''));
console.log("Unit Price :", unitPrice);
await product.getByRole('button', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Go to Cart' }).click();


const quantity = 5

    for (let i = 1; i < quantity; i++) {
        await page.locator('[data-a-selector="increment"]').click(); //css
        
    }

    const subtotalText = await page.locator('#sc-subtotal-amount-activecart').textContent();
    const actualSubtotal = Number(subtotalText.replace(/[₹,]/g, '')
    );

    const expectedSubtotal = unitPrice * quantity;

    console.log("Expected :", expectedSubtotal);
    console.log("Actual :", actualSubtotal);

    // Validation
    expect(actualSubtotal).toBe(expectedSubtotal);
});