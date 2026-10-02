// day18_screenshots_videos.spec.js
import { test, expect } from '@playwright/test';

test('Mini Bank login and capture screenshots', async ({ page }) => {

    // STEP 1: Go to Mini Bank login page
    console.log('STEP 1: Go to Mini Bank login page');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://mini-bank.testamplify.com/login');
    await expect(page).toHaveURL('https://mini-bank.testamplify.com/login');

    // STEP 2: Login to the account
    console.log('STEP 2: Login to the account');
    const emailInput = page.locator("//input[@type='email']");
    await emailInput.fill('testuser2@yopmail.com');

    const passwordInput = page.locator("//input[@type='password']");
    await passwordInput.fill('Pass2005#');

    const loginBtn = page.locator("//button[normalize-space()='Login']");
    await loginBtn.click();

    // STEP 3: Wait for dashboard to load
    console.log('STEP 3: Wait for dashboard to load');
    await page.waitForURL('**/dashboard', { timeout: 10000 });
    await expect(page.locator("//h2[contains(.,'Overview')]")).toBeVisible();

    // STEP 4: Take full page screenshot of dashboard
    // captures the entire page top to bottom
    console.log('STEP 4: Take full page screenshot of dashboard');
    await page.screenshot({
        path: 'test-results/day18/dashboard-full.png',
        fullPage: true
    });

    // STEP 5: Take element only screenshot of account balance
    // captures just the balance section not the whole page
    console.log('STEP 5: Take element screenshot of account balance');
    const balanceElement = page.locator("//small[contains(.,'Account balance')]");
    await balanceElement.screenshot({
        path: 'test-results/day18/balance-tile.png'
    });

});