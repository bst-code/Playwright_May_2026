import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class DashboardPage extends BasePage
{
    readonly productEle:Locator
    readonly userEle: Locator
    readonly page: Page

    constructor(page: Page)
    {
        super(page)
        this.page = page
        this.productEle = page.getByText("Products").first()
        this.userEle = page.getByText("Users")
    }

    async clickUsers()
    {
        await this.clickElement(this.userEle)
    }

     async clickProducts()
    {
        await this.clickElement(this.productEle)
    }

    async getDashboardURL()
    {
       await this.waitForUrl("product-dashboard")
       const actualUrl = await this.getCurrentUrl()
       console.log("Actual Home page url is", actualUrl);
       return actualUrl
    }
}
