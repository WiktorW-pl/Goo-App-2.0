import { test, expect } from '@playwright/test';


test.describe("Main page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://goo-app-2-0.vercel.app/");
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Should has title', async ({ page }) => {
    await page.goto('https://goo-app-2-0.vercel.app/');
    await expect(page).toHaveTitle(/Goo App/);
  });
  
  test('Should check started link', async ({ page }) => {
    await page.goto('https://goo-app-2-0.vercel.app/');
    await expect(page).toHaveURL(/.*goo-app/);
    console.log('dupa')
  });

  test("Should switch content after click on button", async ({ page }) => {
    await expect(page).toHaveURL("https://goo-app-2-0.vercel.app/");
    await page.waitForSelector('h2:has-text("To-Do 1")', { timeout: 5000 });
    await page.waitForSelector('h2:has-text("To-Do")', { timeout: 5000 });
  });

});
