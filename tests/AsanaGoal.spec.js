const {test} = require('@playwright/test');


test.only('Portfolio',async({page})=>
{
  await page.goto("https://app.asana.com/-/login");
console.log(await page.title());
await page.locator("[type='email']").fill("tesstiyiY@IYIsyiyuu.asanatest1.us")
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.locator("[type= 'password']").fill("Lsspl#123");
await page.getByRole('button', { name: 'Log in', exact: true }).click();
await page.getByRole('button', { name: 'New team' }).click();
await page.getByPlaceholder('For example: "Marketing" or "Design"').fill('TeamNaming');
await page.getByRole('button', { name: 'Create new team' }).click();
await page.getByRole('button', { name: 'Actions' }).click();
await page.getByRole('menuitem', { name: 'Delete TeamNaming' }).click();
await page.getByRole('button', { name: 'Delete team' }).click();
await page.getByRole('button', { name: 'Delete team' }).nth(1).click();



/*await page.getByRole('button', { name: 'Invite' }).click();
await page.getByRole('button', { name: 'Invite',exact: true }).click();
await page.getByPlaceholder("Add team members by name or email…").pressSequentially("Test");
await page.getByRole('link', { name: 'test7686@86969.asanatest1.us' }).click();*/

})