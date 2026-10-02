// @ts-check
import { test, expect } from '@playwright/test';

// test to verify the website contains the title "Playwright"
test('has title', async ({ page }) => {
  // navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // check that the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

// test to verify the Docs link opens the Documentation page
test('verify that the Docs link opens the Documentation page', async ({ page }) => {
  // navigate to Playwright website
  await page.goto('https://playwright.dev/');

  // find and click the "Docs" link using accessibility role
  await page.getByRole('link', { name: 'Docs' }).click();

  // verify you are on the documentation page
  await expect(page).toHaveURL(/docs/);

  // verify the Installation heading is visible after navigation
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});