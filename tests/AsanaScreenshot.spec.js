const {test, expect} = require('@playwright/test');


test.only('visual',async({page})=>
{
  await page.goto("https://asana.com/de/pricing");
  //await page.screenshot({ path: 'fullpage.png', fullPage: true });
  expect (await page.screenshot()).toMatchSnapshot('fullpage.png');


})