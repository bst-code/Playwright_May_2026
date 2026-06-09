import {test, expect} from '@playwright/test';

test('get all data from Webtable', async ({page}) => {

    await page.goto('https://playground.bsparksoftwaretechnologies.com/webtable');

    const tableBody = page.locator("//table[@id='webtable']/tbody");
    const rows = tableBody.locator('tr');

    for (let i = 0; i < await rows.count(); i++) {

        const cells = rows.nth(i).locator('td'); // it will have all columns of that row 

        for (let j = 0; j < await cells.count(); j++) {

            const data = await cells.nth(j).textContent();
            console.log(data);
        }
    
    }
})

test.only('Click Active checkbox only for admin', async ({page}) => {

    await page.goto('https://playground.bsparksoftwaretechnologies.com/webtable');

    const tableBody = page.locator("//table[@id='webtable']/tbody");
    const rows = tableBody.locator('tr');

    for (let i = 0; i < await rows.count(); i++) {

        const cells = rows.nth(i).locator('td'); // it will have all columns of that row 
        

        for (let j = 0; j < await cells.count(); j++) {

            const data = await cells.nth(j).textContent();
            console.log(data);

            if(data === "ADMIN" || data === "HR")
            {
                const checkbox = page.locator("//input[@name='active']").nth(i)
                await checkbox.click()
            }
        }
    
    }

    await page.waitForTimeout(5000)
})