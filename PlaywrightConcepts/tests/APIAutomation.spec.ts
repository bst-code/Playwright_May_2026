import { test, expect } from '@playwright/test'
import userDataFromJson from './../APITestData/users.json'

const baseURL = "https://api.bsparksoftwaretechnologies.com"
test("Get all user from API", async ({ request }) => {

    const res = await request.get(`${baseURL}/api/users`)

    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()
    const header = res.headers()

    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)
    console.log("header is ", header)

    expect(res.status()).toBe(200)
    expect(res.statusText()).toBe("OK")

    console.log(jsonData[1]["email"])
    console.log(jsonData[1]["password"])

    const len = await jsonData.length
    console.log(len)

    for (let i = 0; i < len; i++) {
        console.log(jsonData[i]["email"])
        console.log(jsonData[i]["password"])
    }

    console.log("Header server data is", header["server"]);
})

test("Get Single user from API using path parameter concept in API", async ({ request }) => {

    const userID = 51
    const res = await request.get(`${baseURL}/api/users/${userID}`)
    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()

    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)

})

test("Get Single user from API using Query parameter concept in API", async ({ request }) => {


    const res = await request.get(`${baseURL}/api/users`, {
        params: {
            userId: 51,
            name: "bala"
        }
    })
    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()
    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)
})

test("Create User - Post request", async ({ request }) => {
    const res = await request.post(`${baseURL}/api/users`, {
        data: {
            "name": "MayMonthBatch_2",
            "email": "may@bspark.com",
            "number": "9600666876",
            "password": "567890"

        }
    })
    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()
    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)

    const actualMsg = jsonData["message"]
    expect(actualMsg).toBe("Bala")
})

test("Create User - Post request using json File data", async ({ request }) => {

    console.log(userDataFromJson.length);
    
    const res = await request.post(`${baseURL}/api/users`, {
        data:userDataFromJson[0]
    })
    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()
    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)

    const actualMsg = jsonData["message"]
    expect(actualMsg).toBe("User created")
})

test("Update User - PUT request", async ({ request }) => {
    const res = await request.put(`${baseURL}/api/users/61`, {
        data: {
            "name": "Murugan",
            "email": "bm@bspark.com",
            "number": "123456789",
            "password": "krkgegj"

        }
    })
    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()
    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)

})

test.only("Delete User - Delete request", async ({ request }) => {
    const res = await request.delete(`${baseURL}/api/users/61`)
    const status = res.status()
    const statusMsg = res.statusText()
    const jsonData = await res.json()
    console.log(`Status is ${status}`)
    console.log(`Status Text is ${statusMsg}`)
    console.log("Response data is ", jsonData)
})

//Create - get - put - get - delete