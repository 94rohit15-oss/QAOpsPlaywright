import { test, expect } from '@playwright/test';

test('Update timesheet status via API', async ({ request }) => {

  const response = await request.put(
    'https://app.asana.com/api/1.0/timesheet_approval_statuses/1217455670018012',
    {
      headers: {
        Authorization: 'Bearer 2/1216752529418208/1217454540883633:61b095e08ee3f1adab0258f56cbe827a',
        'Content-Type': 'application/json'
      },

data: {
  data: {
    "approval_status": "approved",
    "message": "All meesage"
  }
 }
}
  );
  console.log('Status Code:', response.status());
  const responseBody = await response.json();
  console.log(JSON.stringify(responseBody,null,2));
  expect(response.status()).toBe(200);
  expect (responseBody.data.approval_status).toBe('approved');
  expect(responseBody.data.resource_type).toBe('timesheet_approval_status');
  expect(responseBody.data.gid).toBeTruthy();

});