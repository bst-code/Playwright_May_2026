import test from "playwright/test"

test.beforeAll("Before All", async()=>{

    console.log("Before all called....")
})

test.afterAll("After All", async()=>{

    console.log("After all called....")
})

test.beforeEach("Before Each", async({page})=>{

    await page.goto("/login")
})

test.afterEach("After Each",async({page})=>{
    await page.waitForTimeout(2000)
})
