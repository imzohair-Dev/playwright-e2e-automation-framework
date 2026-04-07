import { test, expect } from '../../src/fixtures/test';
import users from '../../src/data/users.json';
import { DataGenerator } from '../../src/utils/dataGenerator';

test.describe('Dashboard End-to-End Workflows', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.adminUser.username, users.adminUser.password);
  });

  test('TC-04: View and verify inventory state @smoke', async ({ dashboardPage }) => {
    const count = await dashboardPage.getInventoryCount();
    expect(count).toBeGreaterThan(0);
    expect(count).toBe(6); // Default saucedemo length
  });
  
  test('TC-05: Ensure logout clears session completely', async ({ dashboardPage, loginPage }) => {
    await dashboardPage.logout();
    await expect(loginPage.loginButton).toBeVisible();
  });
});
