import { test, expect } from '@playwright/test';

test('Test succes login', async ({ page }) => {
 await page.goto('/practice-test-login/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Login | Practice Test Automation/);

  //clicks on the button 
await page.locator('//input[@id="username"]').fill('student');
await page.locator('//input[@id="password"]').fill('Password123');


await page.locator('//button[@id="submit"]').click();



});

test('Test invalid login', async ({ page }) => {
 await page.goto('/practice-test-login/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Login | Practice Test Automation/);

  //clicks on the button 
await page.locator('//input[@id="username"]').fill('studnt');
await page.locator('//input[@id="password"]').fill('Passwrd123');


await page.locator('//button[@id="submit"]').click();


});


test('validtion check', async ({ page }) => {
 await page.goto('/practice-test-login/');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Login | Practice Test Automation/);

  //clicks on the button 
await page.locator('//input[@id="username"]').fill('studnt');
await page.locator('//input[@id="password"]').fill('Passwrd123');


await page.locator('//button[@id="submit"]').click();


});


