const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashboardPage} = require('../pageobjects/DashboardPage');

test('Client App login', async ({page})=>
{
    const username = "94rohit15@gmail.com";
    const password = "Rohit007@";
    const productName = 'ADIDAS ORIGINAL' ;
    const products = page.locator(".card-body");
    const loginPage = new LoginPage(page);
    loginPage.goTo();
    await loginPage.validLogin(username,password);
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

await page.locator("div li").first().waitFor();
const bool = page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=checkout").click();
await page.locator("[placeholder*='Country']").fill("ind",{delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionCount = await dropdown.locator ("button").count();
for(let i=0; i< optionCount; i++)
{
    const text = await dropdown.locator("button").nth(i).textContent();
    if(text === " India")
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }
}
//await expect(page.locator(".user__name [type='text ']").all.first()).toHaveText(username);
//await expect(page.locator(".user__name [type='text']")).all.first().toHaveValue(username);
await page.locator(".action__submit").click();
await expect (page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

});

