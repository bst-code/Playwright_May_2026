import { Page } from "playwright/test";
import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { ProductPage } from "./ProductPage";

export class PageManager
{

   // private fullname? :string 
    private page: Page
    private basePage?: BasePage;
    private loginPage?: LoginPage;
    private dashboardPage?: DashboardPage;
    private productPage? : ProductPage;

    constructor(p:Page)
    {
        this.page = p
    }

    // getFullName()
    // {
    //     if(!this.fullname)
    //     {
    //     this.fullname = "Balamurugan"
    //     }
    //     return this.fullname
    // }

    getBasePage()
    {
        if(!this.basePage)
        {
        this.basePage = new BasePage(this.page);
        }
        return this.basePage
    }

    
    getLoginPage()
    {
        if(!this.loginPage)
        {
        this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage
    }

    
    getDashboardPage()
    {
        if(!this.dashboardPage)
        {
        this.dashboardPage = new DashboardPage(this.page);
        }
        return this.dashboardPage
    }

      
    getProductPage()
    {
        if(!this.productPage)
        {
        this.productPage = new ProductPage(this.page);
        }
        return this.productPage
    }

}