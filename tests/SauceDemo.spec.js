import { test, expect } from '@playwright/test';

test( 'Login flow test' , async ({page}) => {
    await page.goto('https://sauce-demo.myshopify.com/');
    await page.getByRole('link', {name: 'Log In'}).click();
    await page.getByLabel('Email').fill('94rohit15@gmail.com');
    await page.getByLabel('Password').fill('Lsspl#123');
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.goto('https://sauce-demo.myshopify.com/collections/frontpage/products/grey-jacket');
    await getByRole('link', {name: 'Home'}).click();
    await getByRole('link', {name: 'Grey jacket'}).click();
    await page.getByRole('button', {name: 'Add to Cart'}).click();


})