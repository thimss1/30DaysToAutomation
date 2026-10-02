// import testing tools from Playwright
import { test, expect } from '@playwright/test';

test('Google homepage test', async ({ page }) => {
  // navigate to Google website
  await page.goto('https://google.com/');

  // check that the page title contains "Google"
  await expect(page).toHaveTitle(/Google/);

  // take a screenshot of the Google page
  await page.screenshot({ path: 'google-homepage.png' });
});