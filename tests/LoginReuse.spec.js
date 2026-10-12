const {test} = require('@playwright/test');


test.only('Login and Reuse',async({page})=>
{
  await page.goto("https://app.asana.com/-/login");
console.log(await page.title());
await page.locator("[type='email']").fill("tesstiyiY@IYIsyiyuu.asanatest1.us")
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.locator("[type= 'password']").fill("Lsspl#123");
await page.getByRole('button', { name: 'Log in', exact: true }).click();
await page.goto("https://app.asana.com/0/projects/browse");
await page.context().storageState({ path: 'auth.json' });

})