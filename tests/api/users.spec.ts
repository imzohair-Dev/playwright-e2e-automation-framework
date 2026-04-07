import { test, expect } from '../../src/fixtures/test';
import { DataGenerator } from '../../src/utils/dataGenerator';

test.describe('API Only: Users Endpoints @api', () => {

  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  test('TC-07: Fetch single user by ID', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/1`);
    expect(response.ok()).toBeTruthy();
    
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('email');
  });

  test('TC-08: Create new user via API mock', async ({ request }) => {
    const newUser = DataGenerator.generateUser();
    
    const response = await request.post(`${BASE_URL}/users`, {
      data: {
        name: newUser.firstName,
        username: newUser.email,
        email: newUser.email
      }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body.name).toBe(newUser.firstName);
  });
});
