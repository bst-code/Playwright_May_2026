import { test } from '@playwright/test';


test.describe("Learn how to take Screenshot in playwright", () => {

test("Take Screenshot - full screen", async ({ page }) => {
    await page.goto('https://playground.bsparksoftwaretechnologies.com/pw-form-validation');
    await page.screenshot({ path: "./screenshots/fullpage.png", fullPage: true }) // full page screenshot
    await page.screenshot({ path: "./screenshots/viewport.png" }) // viewport screenshot
    await page.waitForTimeout(5000)
})

test("Take Screenshot - element only", async ({ page }) => {
    await page.goto('https://playground.bsparksoftwaretechnologies.com/pw-form-validation');
    const ele = page.locator("//select[@name='country']")
    await ele.screenshot({ path: "./screenshots/element.png" }) // element screenshot
    await page.waitForTimeout(5000)
})

test("Take Screenshot - element only 1", async ({ page }) => {
    await page.goto('https://playground.bsparksoftwaretechnologies.com/pw-form-validation');
    const ele = page.locator("//select[@name='country']")
    await ele.screenshot({ path: "./screenshots/element.png" }) // element screenshot
    await page.waitForTimeout(5000)
})

})