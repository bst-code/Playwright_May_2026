import { Before, After, setDefaultTimeout} from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "../utils/world";
import { LoginPage } from "../pages/LoginPage";
import { BasePage } from "../pages/BasePage";
import { DashboardPage } from "../pages/DashboardPage";

setDefaultTimeout(60 * 1000);

// Before all, Before, Before Step | After all, after, after Step


Before(async function (this:CustomWorld) {
    console.log("Before method triggered");

    console.log(this.userName);
    
    
    this.browser = await chromium.launch({ headless: false }) // open the browser
    let context = await this.browser.newContext() // private window
    this.page = await context.newPage() //tab

    //Create object for all pages
    this.loginPage = new LoginPage(this.page)
    this.basePage = new BasePage(this.page)
    this.dashboardPage = new DashboardPage(this.page)

    

});

After(async function (this: CustomWorld) {
    console.log("After method triggered");
    await this.browser.close()
});