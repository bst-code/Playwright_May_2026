import {test, expect} from '@playwright/test';

test('Auto Retrying Assertion example', async ({ page }) => {
  
     await page.goto('https://playground.bsparksoftwaretechnologies.com/pw-waits');

     await expect(page).toHaveTitle('Playwright Waits | Bspark Software Technologies');
     await expect(page).toHaveURL('https://playground.bsparksoftwaretechnologies.com/pw-waits');

    const ele = page.locator("//button[text()='Load Content (Random Delay)']")
    await ele.click();

    const loadingEle = page.locator("//div[contains(text(),'Loaded after')]")

    await expect.soft(loadingEle).toBeVisible();
    await expect.soft(loadingEle).toContainText('Loaded after');

    //Non retrying assertion examples
    expect("Balamurugan").toContain("Murugan");
    expect(true).toBeTruthy();
    expect("Bala").toEqual("Murugan"); //fails
   
 // Nagative assertion examples
    expect("Bala").not.toEqual("Murugan");
    expect("Balamurugan").not.toContain("Bala");
    expect(false).not.toBeTruthy();


    // Assertion with custom timeout
    await expect(loadingEle).toBeVisible({timeout: 20000});
    await expect(loadingEle).toContainText('Loaded after', {timeout: 20000});
    await page.waitForTimeout(5000);

})

test.only('Soft Assertion example', async ({ page }) => {

      //Soft assertion example
    expect.soft("Bala").toEqual("Murugan"); //false but test will not fail here
    expect.soft("Bala").toEqual("Bala"); //true and test will not fail here also
    expect.soft("Bala").toEqual("Bala"); //true and test will not fail here also

    //At the end of the test, Playwright will check all soft assertions and if any of them has failed, then the test will be marked as failed.

})