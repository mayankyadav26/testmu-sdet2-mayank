import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('Login Feature', () => {

  test('valid user should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await dashboardPage.validateDashboardLoaded();

    await dashboardPage.validateInventoryVisible();

    await expect(page)
      .toHaveURL(/inventory/);
  });

  test('invalid login should show error message', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'locked_out_user',
      'wrong_password'
    );

    await loginPage.validateError(
      'Epic sadface'
    );
  });

  test('user should logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await dashboardPage.validateDashboardLoaded();

    await dashboardPage.logout();

    await expect(page)
      .toHaveURL('https://www.saucedemo.com/');
  });

  test('user should add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await dashboardPage.addProductToCart();

    await dashboardPage.validateCartCount('1');
  });
});