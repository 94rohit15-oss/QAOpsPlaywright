const {test, expect} = require('@playwright/test');


test('Second Playwright test', async ({browser})=>
{
//playwright code
const context = await browser.newContext();
const page = await context.newPage();
const cardTitles = page.locator(".BillingInterstitialPage-sectionContainer");
await page.goto("https://app.asana.com/-/login");
console.log(await page.title());
await page.locator("[type='email']").fill("asanatestqa+hehe3@gmail.com")
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.locator("[type= 'password']").fill("Lsspl#123")
await page.getByRole('button', { name: 'Log in', exact: true }).click();
await page.getByRole('button', { name: 'Upgrade', exact: true }).click();
await page.waitForLoadState('networkidle');
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);


/*await page.locator('div.BillingTierSummary--middleCard')
  .getByRole('button', { name: 'Upgrade to Asana Advanced', exact: true })
  .click();*/
//await page.locator('div.BillingTierSummary--middleCard BillingTierSummary').getByRole('button', { name: 'Upgrade to Asana Advanced', exact: true }).click();
/*await page.getByRole('button', { name: 'Edit', exact: true }).click();
await page.getByRole('button', { name: 'Update plan', exact: true }).click();*/
});

/*test ('Page Playwright test @TEST-1234', async ({page})=>
{
await page.goto("https://google.com/");
console.log(await page.title());

await expect(page).toHaveTitle("Google");
});*/