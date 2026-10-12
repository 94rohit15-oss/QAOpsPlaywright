const {test} = require('@playwright/test');


test.only('Portfolio',async({page})=>
{
  await page.goto("https://app.asana.com/-/login");
console.log(await page.title());
await page.locator("[type='email']").fill("tesstiyiY@IYIsyiyuu.asanatest1.us")
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.locator("[type= 'password']").fill("Lsspl#123");
await page.getByRole('button', { name: 'Log in', exact: true }).click();
await page.getByRole('link', { name: 'Reporting' }).click();
await page.getByRole('button', { name: 'Create' }).nth(1).click();
await page.getByText('Add custom chart').click();
await page.getByRole('button', { name: 'Add', exact: true }).click();
})