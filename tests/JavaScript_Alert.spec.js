import { test, expect } from '@playwright/test';

/*test('Javascript alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});
*/


/* test('Javascript alert confirm',async ({ page}) =>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

page.on('dialog',async dialog =>{
    console.log(dialog.message());
    await dialog.accept();
});

await page.getByRole('button', { name: 'Click for JS Confirm'}).click();
await expect(page.locator('#result')).toHaveText('You clicked: Ok');


}); */

test('Javascript alert text', async ({page})=>{
page.goto('https://the-internet.herokuapp.com/javascript_alerts');


await page.on('dialog' , async dialog =>{
console.log(dialog.message());
await dialog.accept('Rohit');
});
await page.getByRole('button', { name: 'Click for JS Prompt'}).click();
await expect(page.locator('#result')).toHaveText('You entered: Rohit');
});