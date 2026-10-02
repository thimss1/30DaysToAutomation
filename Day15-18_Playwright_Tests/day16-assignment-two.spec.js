
// Create a login test with an assertion
import { test, expect } from '@playwright/test';



test('OrangeHRM Login Test and Assertions', async ({ page }) => {
    // 1. Go to OrangeHRM Home Page
    console.log('STEP 1: Go to OrangeHRM Home Page');

    // Navigations
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://opensource-demo.orangehrmlive.com');

    //Assertions
    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    // 2. Login we can see dashboard to confirm that we were able to login
    console.log('Step 2: Login so we can see Dashboard');

    // Fill username
    await page.locator("//input[@name='username']").fill('Admin');

    // Fill password
    await page.locator("//input[@type='password']").fill('admin123');

    // Click login

    await page.locator("//button[normalize-space()='Login']").click();

    // 3. Confirm login worked - the URL should change to dashboard page

    await expect(page).toHaveURL(/dashboard/);

    await page.screenshot({ path: 'dashboard-success.png', fullPage: true });

    // Print the final URL so failures are easier to trace in the terminal output

    console.log('Current URL:', page.url());


});