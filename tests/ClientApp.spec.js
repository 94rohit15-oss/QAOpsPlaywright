const {test, expect} = require('@playwright/test');


test('Second Playwright test', async ({page})=>
{
    const productName = 'ADIDAS ORIGINAL' ;
    const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("94rohit15@gmail.com");
await page.locator("#userPassword").fill("Rohit007@");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle');
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);
const count = await products.count();
for(let i=0; i< count; ++i)
{
   if(await products.nth(i).locator("b").textContent() === productName)
   {
    await products.nth(i).locator("text= Add To Cart").click();
    break;
   }
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool =page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
expect(bool).toBeTruthy();
/*await page.locator("text=checkout").click();
await page.locator("[placeholder*='Country']").type("ind",{delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
optionCount = await dropdown.locator ("button").count();
for(let i=0; i< optionCount; i++)
{
    text = await dropdown.locator("button").nth(i).textContent();
    if(text === " India")
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }
}*/
});

