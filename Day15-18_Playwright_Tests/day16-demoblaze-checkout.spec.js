// day16-demoblaze-checkout.spec.js
import { test, expect } from '@playwright/test';

test('Day 16 - Demoblaze Full Checkout flow', async ({ page }) => {

    // 1. Go to Demoblaze
    console.log('STEP 1: Maximize page & go to Demoblaze home page');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://www.demoblaze.com');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    // 2. Click first product
    console.log('STEP 2: Click on first product');
    await page.locator("(//h4[@class='card-title']//a)[1]").click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);

    // 3. Add to cart
    console.log('STEP 3: Add product to cart');
    const dialogPromise = page.waitForEvent('dialog');
    await page.locator("//a[normalize-space()='Add to cart']").click();
    await page.waitForTimeout(500);

    // 4. Accept alert
    console.log('STEP 4: Accept the alert popup');
    const dialog = await dialogPromise;
    await dialog.accept();
    await page.waitForTimeout(500);

});