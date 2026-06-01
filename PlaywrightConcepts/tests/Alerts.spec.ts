import {test} from '@playwright/test';


test("Learn Alerts", async ({page})=>{

    //page.once("dialog", async dialog => {

    page.on("dialog", async dialog => {
        console.log(dialog.message());

        if(dialog.message() ==="PRESS A BUTTON!")
        {
            dialog.accept(); // to click on the OK button of the alert
        }else if(dialog.message() === "PLEASE ENTER YOUR NAME")
        {
            dialog.accept("Balamurugan"); // to enter a value in the prompt alert and click on the OK button
        }else{
            dialog.dismiss(); // to click on the Cancel button of the alert
        }
    })

    await page.goto("https://playground.bsparksoftwaretechnologies.com/alert")

    const ele = page.locator("//button[text()='HIT ME']").nth(1);
    await ele.click();

    const ele1 = page.locator("//button[text()='HIT ME']").nth(2);
    await ele1.click();

    await page.waitForTimeout(5000); // wait for 5 seconds to observe the alert

})