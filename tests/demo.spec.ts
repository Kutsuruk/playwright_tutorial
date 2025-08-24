import { test, expect } from '@playwright/test';

test.describe('Tutorial Playwrigt Tests', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Main page banner check', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible();
  });

  test('Main page title check', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toHaveText(
      'Playwright enables reliable end-to-end testing for modern web apps.',
    );
  });

  test('Main page header input field check', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Search (Command+K)' })).toBeVisible();
    await page.getByRole('button', { name: 'Search (Command+K)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('Pages');
    await page.getByRole('option', { name: 'Pages', exact: true }).getByRole('link').click();
    await expect(page).toHaveURL('https://playwright.dev/docs/pages');
  });
});
