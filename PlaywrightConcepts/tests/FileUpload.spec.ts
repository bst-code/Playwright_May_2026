import {test, expect} from "@playwright/test"

test("Single file upload", async({page})=>{
    await page.goto("https://the-internet.hackerearth.com/upload")
    const ele = page.locator("#file-upload")


    await ele.setInputFiles(["./screenshots/element.png"])
    await page.waitForTimeout(5000)
    await page.locator("#file-submit").click()
    await page.waitForTimeout(5000)

})

// https://playground.bsparksoftwaretechnologies.com/pw-upload 

// Assignment -- Write code for single and multiple file upload using Playwright