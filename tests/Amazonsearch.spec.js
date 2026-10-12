import{test,expect}from'@playwright/test';

test('Amazon search shoe',async({page})=>{
    await page.goto('https://www.amazon.in/');

    await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill('Running shoe');
    await page.getByRole('button',{name:'running shoes puma'}).click();
    const product = page.locator('[data-component-type="s-search-result"]').filter({has: page.getByRole('heading', {name: 'Unisex-Adult Redeem Pro Racer Res Running Shoe'})});
    await product.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('button',{name: 'Add to cart'}).click();
    await page.getByRole('link',{name:'Go to Cart'}).click();
    await page.locator("//button[@aria-label='Increase quantity by one PUMA | Redeem Pro Racer Running Shoes']").click();
    //await expect(page.getByText('PUMA | Redeem Pro Racer Running Shoes')).toBeVisible();
    //console.log('PUMA | Redeem Pro Racer Running Shoes');


    
  })

