const {test, expect} = require('@playwright/test');


test.only('Project',async({page})=>
{
  await page.goto("https://app.asana.com/-/login");
console.log(await page.title());
await page.locator("[type='email']").fill("asanatestqa+hehe3@gmail.com")
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.locator("[type= 'password']").fill("Lsspl#1234");
await page.getByRole('button', { name: 'Log in', exact: true }).click();
await page.getByRole('button', { name: 'Create', exact: true }).click();
await page.getByRole('menuitem', { name: 'Project', exact: true }).click();
await page.getByRole('button', { name: 'Blank project'}).nth(0).click();
await page.locator("[id='new_project_dialog_content_name_input']").fill("ProjectAutomation1");
await page.getByRole('button', { name: 'My workspace'}).click();
await page.getByRole('option', { name: 'Private to me Only you can find and access this project.' }).click();
await page.getByRole('button', { name: 'Continue',exact: true }).click();
await page.getByRole('button', { name: 'Create project',exact: true }).click();
await page.getByRole('button', { name: 'Manage members'}).click();
const privacyButton = page.getByRole('button', { name: 'Private to me' });
await expect(privacyButton).toBeVisible();
await expect(privacyButton).toHaveText('Private to me');
//await expect(page.locator('#option')).toHaveValue('Private to me');
})