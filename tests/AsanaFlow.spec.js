const { test, expect } = require('@playwright/test');

test.only('Project', async ({ page, context }) => {
  await page.goto('https://app.asana.com/-/login');
  console.log(await page.title());
  await page.locator('[type="email"]').fill('testteams@teamnm.asanatest1.us');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.locator('[type="password"]').fill('Lsspl#123');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.getByRole('button', { name: 'User settings', exact: true }).click();
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // wait for the new tab
    page.getByRole('menuitem', { name: 'Admin console', exact: true }).click()
  ]);
  await newPage.waitForLoadState();
  await newPage.getByText('Invite members', { exact: true }).click();
  await page.getByTestId('tokenizer-input').fill('someone86876@tea8797mnm.asanatest1.us');

  //await page.getByPlaceholder('name@teamnm.asanatest1.us, name@teamnm.asanatest1.us, …').fill('someone86876@tea8797mnm.asanatest1.us');
  //await page.getByPlaceholder('[type="name@teamnm.asanatest-9.us, name@teamnm.asanatest1.us, …"]').fill('test567657@766747.asanatest1.us');
  //await page.getByText('Teams').click();
  //await page.getByRole('button', { name: 'Create team' }).click();
  //await newPage.getByRole('button', { name: 'Invite members', exact: true }).click();
})