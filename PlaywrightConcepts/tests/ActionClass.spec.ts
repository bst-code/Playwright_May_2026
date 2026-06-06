import {expect, test} from "@playwright/test";

test("Move to element", async ({page}) =>
    {
        test.slow()
        await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
        //const ele = page.locator("//div[text()='ACTION CLASS OPTIONS']")
        const ele = page.getByText("ACTION CLASS OPTIONS")
        await ele.hover()
        await page.waitForTimeout(5000)

        const frameLink = page.getByText("Frames").last()
        await frameLink.hover()
        await page.waitForTimeout(3000)
        await frameLink.click()
        await page.waitForTimeout(5000)
    })

test("DoubleClick", async({page})=>{

  await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
  const ele = page.locator("#bst_btn")
  await ele.dblclick()
  const textEle = page.locator("#bst_para")

  let actualValue = await textEle.textContent()
  console.log("Actual Value: "+actualValue)
  await page.waitForTimeout(5000)
})

test("Right Click", async({page})=>{

  await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
  const ele = page.locator("#bst_anchor")
  await ele.click({button:"right"})
  await page.waitForTimeout(5000)
  
})

test.only("Drag and drop", async({page})=>{

  test.slow()
  await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
  const dragEle = page.locator("//textarea[text()='Bspark Software Technologies']")
  const dropEle = page.locator("#bst_txtarea")
  await dragEle.dragTo(dropEle)
  await page.waitForTimeout(15000)
})

