import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://goo-app-2-0.vercel.app/');

  await expect(page).toHaveTitle(/Goo App/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://goo-app-2-0.vercel.app/');
  await expect(page).toHaveURL(/.*goo-app/);
});

test('test', async ({ page }) => {
  await page.goto('https://goo-app-2-0.vercel.app/');
  await page.getByRole('heading', { name: 'To-do 2' }).click();
  await page.getByRole('heading', { name: 'To-do 1' }).click();
  await page.getByRole('heading', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Switch to games' }).click();
  await page.getByRole('button', { name: 'Switch to games' }).click();
  await page.getByRole('button', { name: 'Get started' }).nth(1).click();
  await page.getByRole('button', { name: 'Back to main page' }).click();
  await page.getByRole('button', { name: 'Get started' }).first().click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('button', { name: 'Get started' }).nth(2).click();
  await page.getByRole('button', { name: 'Back to main page' }).click();
  await page.getByRole('button', { name: 'Switch to games' }).click();
  await page.getByRole('button', { name: 'Get started' }).nth(1).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('button', { name: 'Get started' }).first().click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
  await page.getByRole('link', { name: 'Back to main page' }).click();
});