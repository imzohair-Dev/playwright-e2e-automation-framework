import { test, expect } from '../../src/fixtures/test';
import users from '../../src/data/users.json';
import { DataGenerator } from '../../src/utils/dataGenerator';

test.describe('Checkout Funnel', () => {
  test.beforeEach(async ({ loginPage, dashboardPage }) => {
    await loginPage.goto();
    await loginPage.login(users.adminUser.username, users.adminUser.password);
    
    // Add item to cart and go to checkout
    await dashboardPage.addItemToCart(0);
  });

  test('TC-06: Complete full checkout process with dynamic user data', async ({ checkoutPage }) => {
    const shopper = DataGenerator.generateUser();
    
    // Simulating moving to checkout page
    await checkoutPage.goto();

    await test.step('Submit shipping details', async () => {
      await checkoutPage.fillShippingDetails(shopper.firstName, shopper.lastName, shopper.zipCode);
    });

    await test.step('Finalize order', async () => {
      await checkoutPage.completeCheckout();
      await expect(checkoutPage.successMessage).toBeVisible();
    });
  });
});
