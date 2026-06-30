import {Given, When, Then} from "@cucumber/cucumber"
import { CustomWorld } from "../utils/world";
import { expect } from "@playwright/test";

Given('I navigate to application URL {string}', async function (this: CustomWorld,url:string) {
 
    console.log("Opned Application url ", url);
    await this.basePage.navigateToUrl(url)
    

});

When('I enter username as {string} and password {string}', async function (this: CustomWorld,username:string, password:string) {
 
    console.log("Username and password entered", username, "|" , password);
    await this.loginPage.loginToApp(username,password)
    

});

When('I click Login button', async function (this:CustomWorld) {
  
    console.log("Login button clicked");
    await this.loginPage.clickLoginButton()
    
    
});

Then('I validate home page title {string}', async function (this:CustomWorld, expectedData) {

    console.log("Title verified")
   let actualValue = await this.dashboardPage.getDashboardURL()
   expect(actualValue).toContain(expectedData)
});

Then('I Validate element is displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});