import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('API + UI Integration Flow', () => {

  test('validate user workflow using API and UI', async ({
    page
  }) => {

    // ------------------------------------
    // Step 1: Mock API Response
    // ------------------------------------

    await page.route(
      'https://reqres.in/api/users/2',
      async route => {

        await route.fulfill({

          status: 200,

          contentType: 'application/json',

          body: JSON.stringify({

            data: {
              id: 2,
              email: 'mayank@test.com',
              first_name: 'Mayank',
              last_name: 'Yadav'
            }
          })
        });
      }
    );

    // ------------------------------------
    // Step 2: Trigger API from Browser
    // ------------------------------------

    await page.goto('about:blank');

    const apiResponse = await page.evaluate(async () => {

      const response = await fetch(
        'https://reqres.in/api/users/2'
      );

      return await response.json();
    });

    expect(apiResponse.data.id).toBe(2);

    expect(apiResponse.data.email)
      .toContain('@');

    // ------------------------------------
    // Step 3: UI Login
    // ------------------------------------

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    // ------------------------------------
    // Step 4: Dashboard Validation
    // ------------------------------------

    await dashboardPage.validateDashboardLoaded();

    await dashboardPage.validateInventoryVisible();

    // ------------------------------------
    // Step 5: Add Product
    // ------------------------------------

    await dashboardPage.addProductToCart();

    await dashboardPage.validateCartCount('1');

    // ------------------------------------
    // Step 6: Final Assertion
    // ------------------------------------

    await expect(page)
      .toHaveURL(/inventory/);
  });
});