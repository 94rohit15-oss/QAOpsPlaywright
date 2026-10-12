import { test, expect } from '@playwright/test';

test('Verify Asana Token', async ({ request }) => {

  const response = await request.get(
    'https://app.asana.com/api/1.0/users/me',
    {
      headers: {
        Authorization: 'Bearer 2/1214023934681159/1216907742183738:51d6c23b34ed69883e2f00faa2143c43'
      }
    }
  );

  console.log(response.status());
  console.log(await response.text());

  expect(response.status()).toBe(200);
});