import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly headerLogo: Locator;
  readonly userMenu: Locator;
  readonly logoutButton: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page, '/inventory.html');
    this.headerLogo = page.locator('.app_logo'); 
    this.userMenu = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('#logout_sidebar_link');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async logout() {
    await this.userMenu.click();
    await this.logoutButton.click();
  }

  async getInventoryCount(): Promise<number> {
    return await this.inventoryItems.count();
  }

  async addItemToCart(index: number = 0) {
    await this.inventoryItems.nth(index).locator('button').click();
  }
}
