import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { URLs, credentials } from '../test-data/credentials';

test.describe('Dashboard Test', () => {
    test('Dashboard flow test', async ({ page }) => {
        // Step 1: Go to Landing Page
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await landingPage.assertLandingLoaded();
        console.log('✅ Bank website opened!');

        // Step 2: Click login button
        await landingPage.clickLogin();
        console.log('✅ Clicked Login button');

        // Step 3: Verify Login page Loaded
         const loginPage = new LoginPage(page);
         await loginPage.assertLoaded();
         console.log('✅ Login page loaded');

        // Step 4: Login with email and password
        await loginPage.login(credentials.valid.email, credentials.valid.password, true);
        console.log(`✅ Logged in as ${credentials.valid.email}`);

        // Step 5: Verify dashboard loaded
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.assertDashboardLoaded();
        console.log('✅ Dashboard loaded successfully!');

        // Step 6: Click Account in sidebar
        await dashboardPage.clickAccountInSidebar();
        console.log('✅ Clicked Account!');

        // Step 7: Copy account number
        const accountNumber = await dashboardPage.copyAccountNumber();
        console.log(`✅ Copied account number: ${accountNumber}`);

        // Step 8: Go back to dashboard
        await dashboardPage.goBackToDashboard();
        console.log('✅ Back at dashboard!');
        
        // Step 9: Search for account number
        await dashboardPage.searchForAccountNumber();
        console.log(`🔍 Searching for: ${accountNumber}`);

        // Wait for results
        await page.waitForTimeout(5000);

        // Step 10: Take screenshot
        const screenshotPath = await dashboardPage.takeScreenshot('bank-mission-complete');
        console.log(`📸 Screenshot saved: ${screenshotPath}`);
        
        console.log('🎉 Test completed successfully!');
    });
});