import { test, expect } from '@playwright/test';

test('Create Role and Update Role via API', async ({ request }) => {

  // =========================
  // 1. CREATE ROLE - POST
  // =========================

  const postResponse = await request.post(
    'https://app.asana.com/api/1.0/roles',
    {
      headers: {
        //Authorization: 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
      },

      data: {
        data: {
          workspace: '1218291352683859',
          name: 'API_Role',
          description: 'Flag ON - project_deletion_policy no-op',
          base_role_type: 'member',
          permissions: {
            project_deletion_policy: 'all'
          }
        }
      }
    }
  );

  console.log('POST Status Code:', postResponse.status());

  const postResponseBody = await postResponse.json();

  console.log('POST Response:',JSON.stringify(postResponseBody, null, 2));

  // Verify POST response
  expect(postResponse.status()).toBe(201);

  expect(postResponseBody.data.gid).toBeTruthy();
  expect(postResponseBody.data.resource_type).toBe('role');
  expect(postResponseBody.data.base_role_type).toBe('member');
  expect(postResponseBody.data.workspace.gid).toBe('1218291352683859');

  // Extract GID from POST response
  const roleGid = postResponseBody.data.gid;

  console.log('Created Role GID:', roleGid);


  // =========================
  // 2. UPDATE ROLE - PUT
  // =========================

  const putResponse = await request.put(
    `https://app.asana.com/api/1.0/roles/${roleGid}`,
    {
      headers: {
        //Authorization: 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
      },

      data: {
        data: {
          workspace: '1218291352683859',
          name: 'API_Role',
          description: 'Flag ON - project_deletion_policy no-op',
          base_role_type: 'member',
          permissions: {
            project_deletion_policy: 'owned_projects'
          }
        }
      }
    }
  );

  console.log('PUT Status Code:', putResponse.status());

  const putResponseBody = await putResponse.json();

  console.log(
    'PUT Response:',
    JSON.stringify(putResponseBody, null, 2)
  );

  // Verify PUT response
  expect(putResponse.status()).toBe(200);

  expect(putResponseBody.data.gid).toBe(roleGid);
  expect(putResponseBody.data.resource_type).toBe('role');
  expect(putResponseBody.data.base_role_type).toBe('member');
  expect(putResponseBody.data.workspace.gid).toBe('1218291352683859');

});