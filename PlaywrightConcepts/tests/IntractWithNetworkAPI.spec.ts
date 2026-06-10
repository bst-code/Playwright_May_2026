import {test, expect} from "@playwright/test"

test("Get API response from Networktab", async ({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/login")

    await page.locator("#username").fill('jhon1@gmail.com')
    await page.locator("#pwd").fill('test@12366666666')
    await page.locator("//button[text()='Login']").click()

    const res = await page.waitForResponse("**/api/users/login")
    const body = await res.json()
    console.log((body));

    console.log(res.status()); //200
    expect(res.status()).toBe(401)
    console.log(res.statusText()); //OK
})