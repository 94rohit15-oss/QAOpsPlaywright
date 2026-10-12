import { test, expect } from '@playwright/test';

test('Create Asana Project via API', async ({ request }) => {

  const response = await request.delete(
    'https://app.asana.com/api/1.0/projects/1216895704215160',
    {
      headers: {
        //Authorization: 'Bearer 2/1214023934681159/1216907742183738:51d6c23b34ed69883e2f00faa2143c43',
        'Content-Type': 'application/json'
      },

    }
  );

  console.log('Status Code:', response.status());

  const responseBody = await response.json();

  console.log(JSON.stringify(responseBody, null, 2));

  expect(response.status()).toBe(200);
});