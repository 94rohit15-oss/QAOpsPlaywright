import { test , expect} from '@playwright/test';

test('Flipkart search', async ({ page }) => {

await page.goto ('https://www.flipkart.com/');
await page.getByRole('textbox', {
    name: 'Search for Products, Brands and More'
}).fill('benq monitor').click();
//await page.getByPlaceholder('Search for Products, Brands and More').fill('benq monitor').click();
await page.getByRole('link', {name:'BenQ GW2490 60.96 cm (24 inch) Full HD LED Backlit IPS'}).click();



});