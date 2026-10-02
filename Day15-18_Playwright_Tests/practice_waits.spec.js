//practice_waits.spec.js
// Warm-up practcice: the four wait patterns, on a site I already know works
// Same skills 

import { test, expect } from '@playwright/test';


test('Practice waits - OrangeHRM login', async ({ page }) => {

    // STEP 1: Go to OrangeHRM Login Page
    console.log('STEP 1: Go to OrangeHRM Login Page');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);


    // STEP 2: Check username is visible then fill in 
    console.log('STEP 2: Fill in username');
    await expect(page.locator("//input[@name='username']")).toBeVisible();
    await page.locator("//input[@name='username']").fill('Admin');
    await page.waitForTimeout(300);

    // STEP 3: Check password is visible then fill in 
    console.log('STEP 3: Fill in password');
    await expect(page.locator("//input[@name='password']")).toBeVisible();
    await page.locator("//input[@name='password']").fill('admin123');
    await page.waitForTimeout(300);

    // STEP 4: Check Login button
    console.log('STEP 4: Click Login button');
    await page.locator("//button[normalize-space()='Login']").click();

    // STEP 5: Wait for URL to Change to Dashboard
    console.log('Step 5: Wait for Dashboard URL');
    await page.waitForURL('**/dashboard/index');
    await page.waitForTimeout(1000);

    // STEP 6: Assert Dashboard Heading Is Visible
    console.log('STEP 6: Verify Dashboard heading is visible');
    await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();

    console.log('Practice Waits - OrangeHRM Login Complete');
});













