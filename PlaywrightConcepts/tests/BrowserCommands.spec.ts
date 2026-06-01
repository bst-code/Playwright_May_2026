import {test, chromium, firefox, webkit} from '@playwright/test';

test.skip("Open Browser manually", async ()=>{

    // Open the browser manually without using the 'page' fixture provided by Playwright
    const browser = await chromium.launch({headless: false}); // openn the browser in non-headless mode
    const context = await browser.newContext(); // create a new browser context - private window
    const page = await context.newPage(); // create a new page in the browser context //tab
   
    await page.goto("/"); // navigate to the base URL defined in the Playwright configuration
    await page.waitForTimeout(5000); // wait for 5 seconds to observe the opened page
    await page.close(); // close the browser after the test is done

    const page1 = await context.newPage();
    await page1.goto("https://www.google.com/"); // navigate to the base URL defined in the Playwright configuration
    await page1.waitForTimeout(5000); // wait for 5 seconds to observe the opened page
    await page1.close(); // close the browser after the test is done

    await browser.close(); // close the browser after the test is done

})

test.only("Brower Commands", async ({page})=>{

    await page.goto("/"); 
    const actualTitle = await page.title();
    console.log("Actual Title: " + actualTitle);

    const actualURL = page.url();
    console.log("Actual URL: " + actualURL);

    await page.reload({timeout:5000, waitUntil: 'networkidle'}); // reload the current page
    await page.waitForTimeout(3000); // wait for 3 seconds to observe the reloaded page

    await page.goBack(); // navigate back to the previous page
    await page.waitForTimeout(3000); // wait for 3 seconds to observe the page after going back

    await page.goForward(); // navigate forward to the next page
    await page.waitForTimeout(3000); // wait for 3 seconds to observe the page after going forward

})

