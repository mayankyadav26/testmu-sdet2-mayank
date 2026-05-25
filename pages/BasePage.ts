import { Locator, Page } from '@playwright/test';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async click(locator: Locator) {

    await locator.waitFor({
      state: 'visible'
    });

    await locator.click();
  }

  async fill(locator: Locator, value: string) {

    await locator.waitFor({
      state: 'visible'
    });

    await locator.fill(value);
  }

  async getText(locator: Locator) {

    return await locator.textContent();
  }
}