import{test, expect} from '@playwright/test';



/*test('Upload file' , async ({page}) =>{
await page.goto('https://the-internet.herokuapp.com/upload');
//await page.locator('input[type="file"]').setInputFiles('/Users/rohit/Downloads/G313U91-EC26S71318020-answerKey.pdf').nth(0);  

await page
  .locator('input[type="file"]')
  .nth(0)
  .setInputFiles('/Users/rohit/Downloads/Advt_2.pdf');

  await page.getByRole('button', {name: 'Upload'}).click();
  await expect(page.locator('#uploaded-files')).toHaveText('Advt_2.pdf');
});*/


/*test('File chooser', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/upload');

const fileChooserPromise = page.waitForEvent('filechooser');

await page.locator('#file-upload').click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles('/Users/rohit/Downloads/Advt_2.pdf');
await page.getByRole('button', {name:'Upload'}).click();
})*/


test ('Drag and Drop', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
const dataTransfer = await page.evaluateHandle(() => new DataTransfer());
await page.locator('#drag-drop-upload').dispatchEvent('drop', {dataTransfer});

})