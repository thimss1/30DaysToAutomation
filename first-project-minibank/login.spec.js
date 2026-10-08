import { test } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../test-data/credentials';

test('Login flow - Invalid attempts then valid login', async ({ page }) => {
    const landing = new LandingPage(page);
    const login = new LoginPage(page);

    // Step 1: Go to the landing page
    await landing.goto();
    await landing.assertLandingLoaded();
    console.log('✅ Landed on homepage');


    // Step 2: Navigate to login
    await landing.clickLogin();
    await login.assertLoaded();
    console.log('✅ On login page');


    // Step 3: Try invalid logins
    console.log('🚫 Testing invalid logins...');
    for (const user of credentials.invalid) {
        console.log(`❌ Trying invalid: ${user.email}`);
        await login.login(user.email, user.password, false);  // expect it to fail
    }
    console.log('✅ All invalid logins handled correctly');

    // Step 4: Try valid login
    console.log(`✅ Try valid login: ${credentials.valid.email}`);
    await login.login(credentials.valid.email, credentials.valid.password, true); // expect success

    // Step 5: Assert that dashboard loaded and capture screenshot
    await login.assertDashboardLoaded();
    console.log('✅ Dashboard loaded successfully!')

    console.log('✅ Whoohoo Test Completed Successfully! 🎉🎊🥳')
});

