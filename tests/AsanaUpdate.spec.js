import { test, expect } from '@playwright/test';

test('Create Asana Project via API', async ({ request }) => {

    const response = await request.put(
        'https://app.asana.com/api/1.0/projects/1216888577579933',
        {
            headers: {
                Authorization: '',
                'Content-Type': 'application/json'
            },

            data: {
                data: {
                    name: 'Updated',
                    workspace: '1214016119238586',
                    privacy_setting: 'private',
                    color: 'dark-orange',
                    default_view: 'board'
                }
            }
        }
    );

    console.log('Status Code:', response.status());
    const responseBody = await response.json();

    console.log(JSON.stringify(responseBody, null, 2));

    expect(response.status()).toBe(200);

    const getResponse = await request.get(
  'https://app.asana.com/api/1.0/projects/1216888577579933',
  {
    headers: {
     
    }
  }
);

const project = await getResponse.json();

expect(project.data.name).toBe('Updated');
expect(project.data.default_view).toBe('board');
expect(project.data.color).toBe('dark-orange');
expect(project.data.privacy_setting).toBe('private');
});