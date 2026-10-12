 import { test,expect } from '@playwright/test';

test('Amazon account list', async({page}) => {
page.goto('https://www.amazon.in/');
await page.getByRole('link',{name:/Hello, sign in/i}).click();
//await page.getByPlaceholder('Payment options').click();
//await expect(page.getBytext('Enter mobile number or email')).toBeVisible();

const text = await page.getByText("Enter mobile number or email").textContent();
console.log(text);



})