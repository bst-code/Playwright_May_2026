import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import "./hooks.ts"

test.describe("Login Testcases", ()=>{

test("Login with valid data", async ({page})=>{

    // await page.goto("/login") // Moved to before Each 
     const loginObj = new LoginPage(page)
     await loginObj.loginToApp("jhon1@gmail.com", "test@123")

    const dashboardObj = new DashboardPage(page)
    const actaulData = await dashboardObj.getDashboardURL()
    expect(actaulData).toContain("product-dashboard")

    // await page.waitForTimeout(2000) // moved to after Each
})

test("Login with Invalid data", async ({page})=>{

   // await page.goto("/login")
    const loginObj = new LoginPage(page)
    await loginObj.loginToApp("xyz@gmail.com", "test@1233564564456")

    const actualData = await loginObj.getErrorMessage()
    expect(actualData).toEqual("Invalid email or password")

   // await page.waitForTimeout(2000)

})

})