import { test, expect } from '@playwright/test';

test('Create timesheet status via API', async ({ request }) => {

  const response = await request.post(
    'https://app.asana.com/api/1.0/timesheet_approval_statuses',
    {
      headers: {
       
        'Content-Type': 'application/json'
      },

data: {
  data: {
    "user": "1216752529418208",
    "workspace": "1216752854019079",
    "start_date": "2026-08-10",
    "end_date": "2026-08-16"
    
  }
 }
}
  );
  console.log('Status Code:', response.status());
  const responseBody = await response.json();
  console.log(JSON.stringify(responseBody,null,2));
  expect(response.status()).toBe(201);
  expect(responseBody.data.approval_status).toBe('draft');
  expect(responseBody.data.resource_type).toBe('timesheet_approval_status');
  expect(responseBody.data.reviewers[0].name).toBe('Tester1');
  expect(responseBody.data.reviewers[0].gid).toBe('1216752529418208');
  expect(responseBody.data.gid).toBeTruthy();

});