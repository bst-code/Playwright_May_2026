import {test, expect} from "@playwright/test"

test("Store login session", async ({page})=>{

    await page.goto("https://onelogin.bsparksoftwaretechnologies.com/")

    await page.getByPlaceholder("Email").last().fill('bala@test.com')
    await page.getByPlaceholder("Password").last().fill('123')
    await page.locator("//button[text()='Login']").click()

    await page.waitForTimeout(5000)

    await page.context().storageState({path:'./storage/auth.json'})
})

test.only("Access course page without login from UI", async({page})=>{
    await page.goto("https://onelogin.bsparksoftwaretechnologies.com/courses")
    await page.waitForTimeout(10000)
})
