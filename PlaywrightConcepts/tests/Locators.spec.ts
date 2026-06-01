import {test} from '@playwright/test';

test("Learn Locators", async ({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/pw-input")
    // 1. Locate the input field using its placeholder attribute

    const ele =  page.getByPlaceholder("xxxxx@xxxxx.com");
    await ele.fill("Balamurugan")

  //  const ele1 = page.locator("xpath = //input[@value='APPEND']")
    const ele1 = page.locator("//input[@value='APPEND']")
    const actualValue = await ele1.getAttribute("value");
    console.log(actualValue);
    //await ele1.clear();
    await ele1.fill("Bala",{timeout: 5000,force: true});
    
    // const ele2 = page.locator("//input[@value='I am disabled']")
    // await ele2.fill("Bspark",{force: true}) // This will not work as the element is disabled. It will throw an error. To handle this, we can use the force option in the fill method.

    // await ele1.isChecked(); //6 methods to check the state of the element
    // await ele1.isDisabled();
    // await ele1.isEditable();
    // await ele1.isEnabled();
    // await ele1.isHidden();
    // await ele1.isVisible();

    // await ele.scrollIntoViewIfNeeded(); // scrolls the element into view if it is not already visible on the page. This is useful when you want to interact with an element that may be located outside the current viewport.

    //Locate using ID or Classname
    //const id_ele = page.locator("id=inputEmail").or(page.locator("#inputEmail"));
    //const class_ele = page.locator("class=inputtext").or(page.locator(".inputtext"));


    //getText form element 

//    const actualText = await ele.textContent();
//    console.log(actualText); 

    //const ele3 = page.locator("//input[@type='text']").first(); // to locate the first element with the specified locator
   // const ele3 = page.locator("//input[@type='text']").last(); // to locate the last element with the specified locator
    const ele3 = page.locator("//input[@type='text']").nth(3); // to locate the nth element with the specified locator (index starts from 0)
    ele3.click();
   // ele3.dblclick(); // double click on the element
    //ele3.click({button: "right"}); // right click on the element

    await page.waitForTimeout(5000); // wait for 5 seconds to observe the changes made to the input field
})
