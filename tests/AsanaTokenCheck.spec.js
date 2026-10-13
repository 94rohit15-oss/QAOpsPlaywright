import { test, expect } from '@playwright/test';

test('Verify Asana Token', async ({ request }) => {

  const response = await request.get(
    'https://app.asana.com/api/1.0/users/me',
    {
      headers: {
        
      }
    }
  );

  console.log(response.status());
  console.log(await response.text());

  expect(response.status()).toBe(200);
});