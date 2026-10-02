// tag[@attribute= 'value']
// day16-filing-forms.spec.js

import { test, expect } from '@playwright/test';

test('Day 16 - Fill Mini Shop checkout form', async ({ page }) => {

  // Block the chat widget so it can't cover the page
  await page.route('**/*', route => {
    const url = route.request().url();
    if (url.includes('chatbase') || url.includes('crisp') || url.includes('intercom') || url.includes('tawk')) {
      return route.abort();
    }
    return route.continue();
  });

  // 1. Go to Mini Shop
  console.log('STEP 1: Maximize page & Go to Mini Shop home page');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://mini-shop.testamplify.com');

  // 2. Add first product to cart (first "Add to cart" on the page)
  console.log('STEP 2: Add first product to cart');
  await page.locator("(//button[normalize-space()='Add to cart'])[1]").click();

  // 3. Open cart (top right / link)
  console.log('STEP 3: Open cart page');
  await page.locator("//a[@href='/cart']").click();
  await expect(page).toHaveURL("https://mini-shop.testamplify.com/cart");

  // 4. Click "Continue to checkout"
  console.log('STEP 4: Click Continue to checkout on cart page');
  await page.locator("//button[contains(.,'Continue to checkout')]").click();

  // 5. Login
  console.log('STEP 5: Login so we can checkout');

  // Fill email
  await page.locator("//input[@type='email']").fill('testuser2@yopmail.com');

  // Fill password
  await page.locator("//input[@type='password']").fill('Pass2005#');

  // Click login
  await page.locator("//button[normalize-space()='Login']").click();

  // 6. Wait for login to complete - the greeting appears in the header once logged in
  console.log('STEP 6: After login, wait for redirect');
  await expect(page.locator("//*[contains(normalize-space(),'Hi,')]").first()).toBeVisible({ timeout: 15000 });

  // Check current URL
  console.log('Current URL:', page.url());

  // If back on cart -> click checkout again
  if (page.url().includes('/cart')) {
    console.log('Back on cart page -> clicking Continue to checkout');

    const checkoutBtn = page.locator("//button[normalize-space()='Continue to checkout' or normalize-space()='Checkout']");
    await checkoutBtn.waitFor({ state: 'visible', timeout: 5000 });
    await checkoutBtn.click();
  }

  // 6.5 Assert we are on Checkout page
  await expect(page).toHaveURL(/checkout/);
  await expect(page.locator("//*[self::h1 or self::h2 or self::h3][contains(normalize-space(),'Billing Details')]")).toBeVisible({ timeout: 15000 });

  // 7. Fill Billing Details
  console.log('STEP 7: Fill Billing Details form');

  await page.locator("//label[contains(.,'First name')]/following-sibling::input").fill('Testa');
  await page.locator("//label[contains(.,'Last name')]/following-sibling::input").fill('Rossa');

  await page.locator("//input[@placeholder='House number and street name']").fill('201 Test Lane');
  await page.locator("//input[@name='town']").fill('Atlanta');

  await page.locator("//input[@placeholder='Choose state']").click();
  await page.locator("//div[normalize-space()='Georgia']").click();

  await page.locator("//input[@name='zip']").fill('30033');
  await page.locator("//input[@name='phone']").fill('3125026998');
  await page.locator("//input[@name='email']").fill('testuser411@yopmail.com');

  // 8. Payment Information
  console.log('STEP 8: Fill payment information');

  await page.locator("//input[@name='cardNo']").fill('4242424242424242');
  await page.locator("//label[contains(.,'Expiry')]/following-sibling::input").fill('1026');
  await page.locator("//input[@name='cvv' or @name='cvc' or @name='ccv']").fill('200');
  await page.locator("//input[@name='cardName']").fill('Testa Rossa');

  // 9. Submit
  console.log('STEP 9: Submit checkout');
  await page.locator("//button[contains(.,'Continue to payment')]").click();

  // 10. Verify success
  console.log('STEP 10: Verify order success page');
  await expect(page).toHaveURL("https://mini-shop.testamplify.com/checkout/success");
  await expect(page.locator("//p[contains(.,'ORDER IS SUCCESSFUL') or contains(.,'order is successful')]")).toBeVisible();

  console.log('Day 16 form flow completed successfully (XPath only).');
});