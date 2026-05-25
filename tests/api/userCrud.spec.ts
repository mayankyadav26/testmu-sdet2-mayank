import { test, expect } from '@playwright/test';

test.describe('User API Tests', () => {

  test('mock get users response', async ({ page }) => {

    await page.route(
      'https://reqres.in/api/users?page=2',
      async route => {

        await route.fulfill({
          status: 200,

          contentType: 'application/json',

          body: JSON.stringify({
            data: [
              {
                id: 1,
                email: 'mayank@test.com'
              }
            ]
          })
        });
      }
    );

    const response = await page.request.get(
      'https://reqres.in/api/users?page=2'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.length)
      .toBeGreaterThan(0);
  });

  test('mock create user response', async ({ page }) => {

    await page.route(
      'https://reqres.in/api/users',
      async route => {

        await route.fulfill({
          status: 201,

          contentType: 'application/json',

          body: JSON.stringify({
            name: 'Mayank',
            job: 'SDET',
            id: '101'
          })
        });
      }
    );

    const response = await page.request.post(
      'https://reqres.in/api/users',
      {
        data: {
          name: 'Mayank',
          job: 'SDET'
        }
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe('Mayank');
  });

  test('validate response time', async ({ page }) => {

    const startTime = Date.now();

    const response = await page.request.get(
      'https://reqres.in/api/users?page=2'
    );

    const responseTime = Date.now() - startTime;

    expect(response.ok()).toBeTruthy();

    expect(responseTime)
      .toBeLessThan(5000);
  });
});