import { test } from '@playwright/test';


test("Select Dropdown values", async ({page})=>{

    await page.goto('https://playground.bsparksoftwaretechnologies.com/pw-form-validation');

    const ele = page.locator("//select[@name='country']")


    console.log(await ele.textContent());
    

   //await ele.selectOption({index: 2 }) // index based selection, 0 based indexing
   //await ele.selectOption({label: "India"}) // visual selection
   await ele.selectOption({value: "India"}) //option tag la irukkura value select pannum

   const allOptions = await ele.allTextContents() // get all the options in the dropdown
   console.log(allOptions);
   
   await page.waitForTimeout(5000)
})