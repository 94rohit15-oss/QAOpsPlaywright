const {test} = require('@playwright/test');


test.only('Portfolio',async({page})=>
{
  await page.goto("https://app.asana.com/-/login");
console.log(await page.title());
await page.locator("[type='email']").fill("tesstiyiY@IYIsyiyuu.asanatest1.us")
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.locator("[type= 'password']").fill("Lsspl#123");
await page.getByRole('button', { name: 'Log in', exact: true }).click();
await page.getByRole('link', { name: 'My tasks' }).nth(0).click();
await page.locator('.SpreadsheetGridTaskNameAndDetailsCellGroup-detailsButtonClickAreaRightChildren').first().click();
await page.locator('[aria-label="Edit comment"]').click();
await page.getByRole('button', { name: 'Attach a file or paste an image' }).click();
await page.getByRole('button', { name: 'Choose a file' }).click();
const fileInput = page.locator('input[type="file"]').first();
await fileInput.setInputFiles(['/Users/rohit/Desktop/Upload.png','/Users/rohit/Desktop/Upload2.png']);
await page.getByRole('button', { name: 'Comment' }).click();
await page.getByRole('button', { name: 'Show options' }).click();

const [download] = await Promise.all([
    page.waitForEvent('download'),
    await page.getByRole('menuitem', { name: 'Download attachment' }).click()]);
  await download.saveAs('downloads/report.png');
  


})