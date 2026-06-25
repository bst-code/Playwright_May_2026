import {Locator, Page, test} from "@playwright/test"
import { PlaywrightGenerics } from "../utills/PlaywrightGenerics";

export class LoginPage extends PlaywrightGenerics
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
        this.enterText(this.emailEle,emailId)
        this.enterText(this.PasswordEle,password)
        this.clickElement(this.LoginButton)
    }

    async getErrorMessage():Promise<string | null>
    {
        const actualText = this.getText(this.ErrorMsgEle)       
        return actualText
    }

}