const { test , expect} = require('@playwright/test');

test('Amazon search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Running shoe');

  //await page.keyboard.press('ArrowDown');
  //await page.keyboard.press('Enter');

  //await page.getByText('running shoes puma').click()

  await page.getByRole('button',{name:'running shoes puma'}).click();
await expect(page.getByRole('heading', {name: 'Unisex-Adult Redeem Pro Racer Res Running Shoe'})).toBeVisible();


  
  //await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.locator("//button[@aria-label='Add to cart']").first().click();
});





