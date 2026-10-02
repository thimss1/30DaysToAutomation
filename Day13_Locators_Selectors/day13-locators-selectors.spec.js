import { test, expect } from '@playwright/test';
test('Day 13 - Locator Strategies Practice', async ( { page }) => {
    console.log("🚀 Starting Day 13 Locator Practice Test");
    await page.goto('https://mini-bank.testamplify.com/');

// Get by role
const loginButton = page.getByRole('button', { name: 'Login' });
await expect(loginButton).toBeEnabled();
console.log("✅ getByRole locator working");

// Get by Text
console.log('\n--- By Text Content ---');
const headerText = page.getByText('Manage your finances seamlessly');
await expect(headerText).toBeVisible();
console.log ("✅ getByText locator working");

// Get text by Placeholder
console.log('\n--- By Placeholder ---')
await loginButton.click();
const username = page.getByPlaceholder('you@example.com');
const password = page.getByPlaceholder('Enter your password');

await expect(username).toBeVisible();
await expect(password).toBeVisible();
console.log("✅ getByPlaceholder locator working");

// Type into both fields
await username.fill('testuser@example.com');
await password.fill('password123');

// Get by XPath Locator
const loginBtnXPath = page.locator('//button[@type="submit"]');
await expect(loginBtnXPath).toBeEnabled();
console.log("✅ XPath locator working");

// Click login button
await loginBtnXPath.click();

// Wait for navigation to complete
await page.waitForLoadState('networkidle');

// Debugging: Let's see what's on the page 
    console.log('\n--- Debugging CSS Selector Issue ---')

// Take a screenshot of the dashboard
await page.screenshot({ path: 'debug-homepage.png' });
console.log('Screenshot saved as debug-homepage.png');

// Go to homepage for CSS selector test
console.log('\n--- Navigating back to homepage for CSS Selector test ---');
await page.goto('https://mini-bank.testamplify.com/');

// Get by CSS Selector
console.log('\n--- By CSS Selector ---');

// CSS selector for login button
const titleByCSS = page.locator('button:has-text("Login")');
await expect(titleByCSS).toBeVisible();
console.log('✅ CSS Selectors working!');

});

























