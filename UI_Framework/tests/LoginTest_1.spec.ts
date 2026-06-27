import {expect} from "@playwright/test"
import {test} from "../Fixture/testBase.ts"
import "./hooks.ts"
import { PageManager } from "../pages/PageManager.ts"
import testData from "../testData/data.json"

test.describe("Login Testcases", ()=>{

test("Login with valid data", async ({page,pageManageObj})=>{

    //  const loginObj = new LoginPage(page)
    //  const dashboardObj = new DashboardPage(page)
    
   // const pageManageObj = new PageManager(page)
    await pageManageObj.getLoginPage().loginToApp(testData.globalData.UserName, testData.globalData.Password)
    const actaulData = await pageManageObj.getDashboardPage().getDashboardURL()
    expect(actaulData).toContain(testData.TC_001.ExpectedDashboardUrl)

    //.env file data 
    console.log(process.env.DB_Name);
    console.log(process.env.DB_UserName);
    console.log(process.env.DB_Password);

})

test("Login with Invalid data", async ({page,pageManageObj})=>{

  //  const pageManageObj = new PageManager(page)
    await pageManageObj.getLoginPage().loginToApp(testData.TC_002.UserName, testData.TC_002.Password)
    const actualData = await pageManageObj.getLoginPage().getErrorMessage()
    expect(actualData).toEqual(testData.TC_002.ExpectedErrorMsg)
})

})