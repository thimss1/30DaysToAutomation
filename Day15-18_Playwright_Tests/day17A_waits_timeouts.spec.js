// day17A_waits_timeouts.spec.js
import { test, expect } from '@playwright/test';

test('Day 17 - MiniBank - Assertions and Waits and Timeouts', async ({ page }) => {

  // STEP 1: Go to MiniBank Login page
  console.log('STEP 1: Go to MiniBank Login Page');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://mini-bank.testamplify.com/login');
  await page.waitForLoadState('domcontentloaded');


  // STEP 2: Fill in email
  console.log('STEP 2: Fill in email');
  await expect(page.locator("//input[@name='email']")).toBeVisible();
  await page.locator("//input[@name='email']").fill('testuser2@yopmail.com');


  // STEP 3: Fill in password
  console.log('STEP 3: Fill in password');
  await expect(page.locator("//input[@name='password']")).toBeVisible();
  await page.locator("//input[@name='password']").fill('Pass2005#');



  // STEP 4: Click Login Button
  console.log('STEP 4: Click Login Button');
  await page.locator("//button[normalize-space()='Login']").click();



  // STEP 5: Assert dashboard loaded
  console.log('STEP 5: Assert dashboard loaded');
  await page.waitForURL('**/dashboard');
  await expect(page.locator("//h2[contains(.,'Overview')]")).toBeVisible();


  // STEP 6: Assert Recent Transactions are visible
  console.log('STEP 6: Assert recent transactions are visible');
  await expect(page.locator("//a[contains(.,'See All')]")).toBeVisible();
  await page.locator("//a[contains(.,'See All')]").click();



  // STEP 7: Assert Transactions table is visible
  console.log('STEP 7: Assert transactions table is visible');
  await page.waitForURL('**/dashboard/transactions');
  await expect(page.locator("//h1[normalize-space()='Transactions']")).toBeVisible();

  // STEP 8: Assert Account Balance is visible
  console.log('STEP 8: Assert Account Balance is visible');
  await page.pause();
  await expect(page.locator("//small[contains(.,'Account balance')]")).toBeVisible();



});