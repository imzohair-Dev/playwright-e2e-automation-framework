import { test as baseTest, expect as baseExpect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { AuthApi } from '../api/AuthApi';
import { UserApi } from '../api/UserApi';

// Extending base Playwright test object generic types with our models
type AppFixtures = {
  // Pages
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  checkoutPage: CheckoutPage;
  
  // API
  authApi: AuthApi;
  userApi: UserApi;
};

// Create custom test instance
export const test = baseTest.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  authApi: async ({ request }, use) => {
    await use(new AuthApi(request));
  },
  userApi: async ({ request }, use) => {
    await use(new UserApi(request));
  }
});

// Export custom test and base expect
export { expect } from '@playwright/test';
