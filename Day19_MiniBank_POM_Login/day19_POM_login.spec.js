// import test and expect from playwright
import { test, expect } from '@playwright/test'

// import LoginPage from pages/LoginPage.js
import LoginPage from './day19_LoginPage';

// test name: Day 19 - MiniBank POM Login
test('Day 19 - MiniBank POM Login', async ({ page }) => {

    // STEP 1: create new LoginPage instance
    const loginPage = new LoginPage(page);

    // STEP 2: go to login page
    await loginPage.goto();

    // STEP 3: login with credentials
    await loginPage.login('testuser2@yopmail.com', 'Pass2005#');


    // STEP 4: assert URL changed to dashboard
    await expect(page).toHaveURL(/dashboard/);

    // STEP 5: assert Overview heading is visible
    await expect(page.locator("//h2[normalize-space()='Overview']")).toBeVisible();
});