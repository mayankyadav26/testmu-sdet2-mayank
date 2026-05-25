import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {

  readonly pageTitle: Locator;

  readonly addToCartButton: Locator;

  readonly cartBadge: Locator;

  readonly burgerMenu: Locator;

  readonly logoutLink: Locator;

  readonly inventoryItem: Locator;

  constructor(page: Page) {

    super(page);

    this.pageTitle = page.locator('.title');

    this.addToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.burgerMenu = page.locator('#react-burger-menu-btn');

    this.logoutLink = page.locator('#logout_sidebar_link');

    this.inventoryItem = page.locator('.inventory_item');
  }

  async validateDashboardLoaded() {

    await expect(this.pageTitle)
      .toHaveText('Products');
  }

  async validateInventoryVisible() {

    await expect(this.inventoryItem.first())
      .toBeVisible();
  }

  async addProductToCart() {

    await this.addToCartButton.click();
  }

  async validateCartCount(expectedCount: string) {

    await expect(this.cartBadge)
      .toHaveText(expectedCount);
  }

  async logout() {

    await this.burgerMenu.click();

    await this.logoutLink.waitFor({
      state: 'visible'
    });

    await this.logoutLink.click();
  }
}