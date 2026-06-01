import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  await page.goto('/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bspark Software Technologies || Playground/);

  await page.waitForTimeout(5000)
});