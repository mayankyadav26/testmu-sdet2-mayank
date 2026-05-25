import { test, expect } from '@playwright/test';

test('validate invalid endpoint response', async ({ page }) => {

  await page.route(
    'https://reqres.in/api/unknown/999',
    async route => {

      await route.fulfill({
        status: 404,

        contentType: 'application/json',

        body: JSON.stringify({
          error: 'Not Found'
        })
      });
    }
  );

  const response = await page.request.get(
    'https://reqres.in/api/unknown/999'
  );

  expect(response.status()).toBe(404);
});