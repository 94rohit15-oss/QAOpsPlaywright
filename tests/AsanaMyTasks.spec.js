const { test, expect } = require('@playwright/test');


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
const userMenu = page.getByRole('button', {name: 'Copy task link'});

await userMenu.hover();

await expect(
  page.getByText('Copy task link')
).toBeVisible();



/*await page.locator('[aria-label="Edit comment"]').click();
await page.getByRole('button', { name: 'Attach a file or paste an image' }).click();
await page.getByRole('button', { name: 'Choose a file' }).click();
const fileInput = page.locator('input[type="file"]').first();
await fileInput.setInputFiles(['/Users/rohit/Desktop/Upload.png','/Users/rohit/Desktop/Upload2.png']);
await page.getByRole('button', { name: 'Comment' }).click();*/




//await page.keyboard.type('This is my comment');

/*await page.getByRole('button', { name: /Attachments: Add a file to this task/i }).click();
//await page.setInputFiles('input[type="file"]', '/Users/rohit/Desktop/Upload.png','/Users/rohit/Desktop/Upload.2png');
await page.getByRole('button', { name: 'Choose a file' }).click();
await page.setInputFiles('input[type="file"]', '/Users/rohit/Desktop/Upload.png');*/








/*await page.getByRole('button', { name: 'Add task'}).nth(0).click();
await page.getByPlaceholder('Write a task name').fill("TeamNamingA");

//click outside by class name to save the task
await page.locator('.PageToolbarStructure').first().click();

//select the first text area and right click 
await page.locator('textarea[aria-label="Task name"]').first().click({ button: 'right' });
await page.getByRole('menuitem', { name: 'Delete task' }).click();
await page.getByRole('button', { name: 'Undo'}).click();*/


//await page.getByText('TeamNamingA').click({ button: 'right' });

//await page.getByRole('button', { name: 'TeamNaming'}).click();


})