import { test, expect } from '@playwright/test';

test('Create Asana Project via API', async ({ request }) => {

  const response = await request.post(
    'https://app.asana.com/api/1.0/projects',
    {
      headers: {
        Authorization: 'Bearer 2/1214023934681159/1216907742183738:51d6c23b34ed69883e2f00faa2143c43',
        'Content-Type': 'application/json'
      },

      data: {
        data: {
          name: 'NewProject',
          workspace: '1214016119238586',
            privacy_setting: 'private',
            owner: {
              gid: '1214023934681159',
                resource_type: 'user',
                name: 'Rohit'
            }
        }
      }
    }
  );

  console.log('Status Code:', response.status());

  const responseBody = await response.json();

  console.log(JSON.stringify(responseBody, null, 2));

  expect(response.status()).toBe(201);

  expect(responseBody.data.gid).toBeTruthy();
  expect(responseBody.data.name).toBe('NewProject');
  expect(responseBody.data.workspace.gid).toBe('1214016119238586');
  expect(responseBody.data.privacy_setting).toBe('private');


  // Owner validations
expect(responseBody.data.owner).toBeTruthy();
expect(responseBody.data.owner.gid).toBe('1214023934681159');
expect(responseBody.data.owner.resource_type).toBe('user');
expect(responseBody.data.owner.name).toBe('Rohit');
});