import { test, expect } from '@playwright/test';


test('Retry test', async ({ page }) => { 
    await page.goto('https://playwright.dev/docs/test-assertions'); 
    const title = await page.title(); //Assersion | Playwright

    console.log(title);
    
    expect(title).toEqual('Bala'); 

   
});