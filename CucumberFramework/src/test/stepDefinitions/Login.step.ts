import {Given, When, Then} from "@cucumber/cucumber"

Given('I navigate to application URL {string}', async function (url:string) {
 
    console.log("Opned Application url ", url);
    

});

When('I enter username as {string} and password {string}', async function (username:string, password:string) {
 
    console.log("Username and password entered", username, "|" , password);
    

});

When('I click Login button', async function () {
  
    console.log("Login button clicked");
    
    
});

Then('I validate home page title', async function () {

    console.log("Title verified")
});

Then('I Validate element is displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});