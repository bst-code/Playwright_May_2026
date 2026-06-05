import {test} from '@playwright/test';

test("Handle Frames", async ({page}) => {

    await page.goto("https://playground.bsparksoftwaretechnologies.com/frames");

    const frame =  page.frameLocator("#bst_frame1");

    const ele = frame.locator("#username");
    await ele.fill("Balaji");

    const submitBtn = frame.getByRole("button", {name: "Submit"});

    await submitBtn.click();

    const messageEle = frame.locator("//p[contains(@class,'ButtonFrame_message')]")
    const actualData = await messageEle.textContent();
    console.log("Message: " + actualData);

    await page.waitForTimeout(5000);

    //Nested Frames
    // const parentFrame = page.frameLocator("#bst_frame2");
    // const childFrame = parentFrame.frameLocator("#bst_frame3");
    // const childEle = childFrame.locator("#username");
    // await childEle.fill("Balaji");   

    //multiple frames
    const frames = page.frames();
    console.log("Total Frames: " + frames.length);

    for(let i=0; i<frames.length; i++){
        const frameName =  frames[i].locator("xyz").textContent();
        console.log("Frame Name: " + frameName);
    }

    


    
    
    



})