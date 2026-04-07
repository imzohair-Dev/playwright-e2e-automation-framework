import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly path: string;

  constructor(page: Page, path: string = '') {
    this.page = page;
    this.path = path;
  }

  /**
   * Navigate to the page path
   */
  async goto() {
    await this.page.goto(this.path);
    await this.waitForLoadState();
  }

  /**
   * Wait for network and DOM to be fully loaded
   */
  async waitForLoadState() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Get an element by test id
   */
  getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  /**
   * Universal assert for page titles or headers
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
