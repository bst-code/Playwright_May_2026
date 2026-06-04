import {test, chromium} from '@playwright/test';

test("Handle Child Windows", async () => {

const browser = await chromium.launch({headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle");

const element = page.locator("#bst_btn4")

const childPage = context.waitForEvent('page')

await element.click();

const page1 = await childPage;

console.log("Child Page Title: " + await page1.title());
console.log("Parent Page Title: " + await page.title());
await browser.close();


})

test("Handle Multiple Windows", async () => {

    const browser = await chromium.launch({headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle");
    const element = page.locator("#bst_btn5")

    const childPage1 = context.waitForEvent('page')
    const childPage2 = context.waitForEvent('page')
    await element.click();

    const page1 = await childPage1;
    const page2 = await childPage2;
    await page1.waitForLoadState("load");
    await page2.waitForLoadState("load");

    console.log("Child Page 1 Title: " +  page1.url());
    console.log("Child Page 2 Title: " +  page2.url());
    console.log("Parent Page Title: " +  page.url());
    await browser.close();  

})

test.only("get All Pages in Context", async () => {

    const browser = await chromium.launch({headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle");

    const element = page.locator("#bst_btn5")   
    await element.click();
    await page.waitForTimeout(2000);
    const allPages = context.pages(); //returns all the pages in the context including parent and child pages

    for (const pg of allPages) {
        console.log("Page URL: " + pg.url());

        if(pg.url().includes("manualtesting-training"))
            {
                await pg.close();
            }
    }
    await page.waitForTimeout(5000);
})