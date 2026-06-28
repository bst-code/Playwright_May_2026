import{Locator, Page} from "@playwright/test"
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage
{ 
    readonly createPdtButton:Locator
    readonly productID:Locator
    readonly productName:Locator
    readonly productDesc:Locator
    readonly productPrice:Locator
    readonly colorDropdown:Locator
    readonly activeCheckbox:Locator
    readonly saveBtn:Locator
    readonly cancelBtn:Locator

    constructor(page:Page)
    {
        super(page);
        this.createPdtButton = page.getByRole("button",{name:"+ Create Product"})
        this.productID = page.getByPlaceholder("Product ID")
        this.productName = page.getByPlaceholder("Product Name")
        this.productDesc = page.getByPlaceholder("Product Description")
        this.productPrice = page.getByPlaceholder("Product Price")
        this.colorDropdown = page.locator("select[name=color]")
        this.activeCheckbox = page.locator("input[name=active]")
        this.saveBtn = page.locator("button[type=submit]")
        this.cancelBtn = page.getByText("Cancel")
    }

    async clickAddProduct():Promise<void>
    {
        await this.createPdtButton.click()
    }

    async createProductForm(productID:string,productname:string,prodDesc:string,prodPrice:string,color:string)
    {
        await this.enterText(this.productID,productID)
        await this.enterText(this.productName,productname)
        await this.enterText(this.productDesc,prodDesc)
        await this.enterText(this.productPrice,prodPrice)
        await this.selectByLabel(this.colorDropdown,color)
        await this.clickElement(this.activeCheckbox)
        await this.clickElement(this.saveBtn)
        console.log("End of testcases --",productID);
        
    }
}