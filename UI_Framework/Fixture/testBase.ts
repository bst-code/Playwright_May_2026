import {test as base} from "@playwright/test"
import { PageManager } from "../pages/PageManager"


// const pageManageObj = new PageManager(page) // We are going to create Pagemanager Object as custom fixture and pass to each testcase as parametre


type CustomFixture = {
    pageManageObj: PageManager
}

//test = base + custom Fixture

export const test = base.extend<CustomFixture>({

   pageManageObj: async({page},use)=>
    {

        //Before
        console.log("Iam before method from custom Fixture");
        
        //Test
        await use(new PageManager(page))

        //After
         console.log("Iam After method from custom Fixture");
    }
    
})

