// test/mini-shop.navigation.spec.js
import { test, expect } from '@playwright/test';

test('Mini Shop - Basic Navigation and Assertions', async ({ page }) => {
    // 1. Got to home page
    console.log('STEP 1: Go to Mini Shop Home page');
    //Navigation
    await page.goto('https://mini-shop.testamplify.com/');
    //Assertions
    await expect(page).toHaveTitle(/Minishop/);
    await expect(page).toHaveURL(/mini-shop\.testamplify\.com/);

    // 2. Assert search bar is visible
    console.log('STEP 2: Assert search bar is visible');
    const searchbox = page.getByPlaceholder('Search product, or category');
    // Assertions
    await expect(searchbox).toBeVisible();

    // 3. Click "Products" in the top navbar
    console.log('STEP 3: Click Products link');
    const productsLink = page.getByRole('link', { name: 'Products' }).first();
    await productsLink.click();
    // Assertions
    await expect(page).toHaveURL(/products/);

    // 4. Assert "ALL Products" heading is visible
    console.log('STEP:4: Confirm ALL Products section loaded');
    const allProductsHeading = page.getByRole('heading', { name: /ALL Products/i });
    // Assertions
    await expect(allProductsHeading).toBeVisible();

    // 5. Navigate BACK to home
    console.log('STEP 5: Go back to home page');
    // Navigation
    await page.goBack();
    // Assertions 
    await expect(page).toHaveURL('https://mini-shop.testamplify.com/');

    // 6. Navigate FORWARD back to products
    console.log('STEP:6 Go forward to products page again');
    // Navigation
    await page.goForward();
    // Assertions 
    await expect(page).toHaveURL(/products/)

    // 7. Assert a product card exists (list count)
    console.log('STEP 7: Check that we have product cards');
    const productsCards = page.locator('text=Add to cart'); // buttons under each product
    // Assertions
    await expect(productsCards).toHaveCount(4); // page currently shows 4 items

    // 8. Assert a button is enabled
    console.log('Step 8: Check that first "add to cart" is enabled');
    // Assertions 
    await expect(productsCards.first()).toBeEnabled();

    // 9. Assert element is in viewport (heading)
    console.log('STEP 9: Check that ALL Products heading is in viewport');
    // Assertions
    await expect(allProductsHeading).toBeInViewport();

    //  10. Optional: check top bar text(toContainText)
    console.log('STEP 10: Check top promo bar text contains "Sign Up"');
    const topBar = page.getByText(/Sign Up & Get 15% off/i);
    // Assertions
    await expect(topBar).toBeVisible();
});