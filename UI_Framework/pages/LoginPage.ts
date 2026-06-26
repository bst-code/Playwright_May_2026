import {Locator, Page} from "@playwright/test"
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage
{
    // POM --> 1. Locate WebElements and 2. Write page methods 

    // Locate Elements 
    readonly emailEle: Locator;
    readonly PasswordEle: Locator;
    readonly LoginButton:Locator;
    readonly ErrorMsgEle:Locator;

    constructor(page:Page){        
        super(page)
        this.emailEle = page.locator("#username")
        this.PasswordEle = page.locator("#pwd")
        this.LoginButton = page.getByRole('button',{name:'Login'})
        this.ErrorMsgEle = page.locator(".error")
    }

    //Page Methods
    //No data should be hardcoeded

    async loginToApp(emailId:string,password:string):Promise<void>
    {
        //this.emailEle.fill("Bala")
        await this.enterText(this.emailEle,emailId)
        await this.enterText(this.PasswordEle,password)
        await this.clickElement(this.LoginButton)
    }

    async getErrorMessage():Promise<string | null>
    {
        const actualText = await this.getText(this.ErrorMsgEle)       
        return actualText
    }

}