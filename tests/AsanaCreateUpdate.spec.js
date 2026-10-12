import { test, expect } from '@playwright/test';

test('Create and approve timesheet status via API', async ({ request }) => {

  // ============================================================
  // 1. CREATE TIMESHEET APPROVAL STATUS
  // ============================================================

  const createResponse = await request.post(
    'https://app.asana.com/api/1.0/timesheet_approval_statuses',
    {
      headers: {
        //Authorization: 'Bearer 2/1216752529418208/1217454540883633:61b095e08ee3f1adab0258f56cbe827a',
        'Content-Type': 'application/json'
      },

      data: {
        data: {
          user: '1216752529418208',
          workspace: '1216752854019079',
          start_date: '2026-08-10',
          end_date: '2026-08-16'
        }
      }
    }
  );

  console.log('Create Status Code:', createResponse.status());
  const createResponseBody = await createResponse.json();
  console.log('Create Response:',JSON.stringify(createResponseBody, null, 2));

  // Validate CREATE response
  expect(createResponse.status()).toBe(201);
  expect(createResponseBody.data.approval_status).toBe('submitted');
  expect(createResponseBody.data.resource_type).toBe('timesheet_approval_status');
  expect(createResponseBody.data.reviewers[0].name).toBe('Tester1');
  expect(createResponseBody.data.reviewers[0].gid).toBe('1216752529418208');

  // ============================================================
  // 2. FETCH GID FROM CREATE RESPONSE
  // ============================================================

  const approvalGid = createResponseBody.data.gid;

  console.log('Generated Approval GID:', approvalGid);

  expect(approvalGid).toBeTruthy();

  // ============================================================
  // 3. UPDATE TIMESHEET APPROVAL STATUS
  // ============================================================

  const updateResponse = await request.put(
    `https://app.asana.com/api/1.0/timesheet_approval_statuses/${approvalGid}`,
    {
      headers: {
        //Authorization: 'Bearer 2/1216752529418208/1217454540883633:61b095e08ee3f1adab0258f56cbe827a',
        'Content-Type': 'application/json'
      },

      data: {
        data: {
          approval_status: 'approved',
          message: 'All message'
        }
      }
    }
  );

  console.log('Update Status Code:', updateResponse.status());

  const updateResponseBody = await updateResponse.json();

  console.log(
    'Update Response:',
    JSON.stringify(updateResponseBody, null, 2)
  );

  // ============================================================
  // 4. VALIDATE UPDATE RESPONSE
  // ============================================================

  expect(updateResponse.status()).toBe(200);

  expect(updateResponseBody.data.approval_status)
    .toBe('approved');

  expect(updateResponseBody.data.resource_type)
    .toBe('timesheet_approval_status');

  expect(updateResponseBody.data.gid)
    .toBe(approvalGid);

});