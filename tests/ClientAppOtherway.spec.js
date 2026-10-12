const {test, expect} = require('@playwright/test');


test('Second Playwright test', async ({page})=>
{
    const productName = 'ADIDAS ORIGINAL' ;
    const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");
await page.getByPlaceholder("email@example.com").fill("94rohit15@gmail.com");
await page.getByPlaceholder("enter your passsword").fill("Rohit007@");
await page.getByRole('button',{name:"Login"}).click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();

await page.locator(".card-body").filter({hasText: "ADIDAS ORIGINAL"}).getByRole("button", {name:"Add to Cart"}).click();
await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
await page.locator("div li").first().waitFor();
await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
await page.getByRole("button",{name:"Checkout"}).click();
await page.getByPlaceholder("Select Country").pressSequentially("ind");
await page.getByRole("button",{name:"India"}).nth(1).click();
await page.getByText("PLACE ORDER").click();

await expect(page.getByText("Thankyou for the order.")).toBeVisible();





});

