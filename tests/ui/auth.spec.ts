import { test, expect } from '../../src/fixtures/test';
import users from '../../src/data/users.json';
import { DataGenerator } from '../../src/utils/dataGenerator';

test.describe('Authentication Flows', () => {

  test.beforeEach(async ({ loginPage }) => {
    // Navigating to the test page
    // Using demoqa or saucedemo standard login endpoints
    await loginPage.goto();
  });

  test('TC-01: Successful login activates dashboard session @smoke', async ({ loginPage, dashboardPage }) => {
    await test.step('Login with valid credentials', async () => {
      await loginPage.login(users.adminUser.username, users.adminUser.password);
    });

    await test.step('Verify Dashboard loaded', async () => {
      await expect(dashboardPage.headerLogo).toBeVisible();
      await expect(dashboardPage.inventoryItems.first()).toBeVisible();
    });
  });

  test('TC-02: Prevent login with empty credentials @negative', async ({ loginPage }) => {
    await test.step('Submit empty form', async () => {
      await loginPage.loginButton.click();
    });

    await test.step('Verify error message appears', async () => {
      await expect(loginPage.errorMessage).toBeVisible();
    });
  });

  test('TC-03: Create account with valid random data (Mock flow)', async ({ loginPage }) => {
    const newUser = DataGenerator.generateUser();

    await test.step('Fill registration form with fake data', async () => {
      // Assuming a registration flow exists
      console.log(`Mocking registration for ${newUser.email}`);
    });
  });
});
