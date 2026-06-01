

async function delay()
{
    return new Promise(resolve => setTimeout(function(){
        console.log("Line 4");
        resolve();
    },5000))
}

async function demo()
{
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");

    await delay();
    

    console.log("Line 5");
}

demo();


//await open browser
//await url load
//await Enter username and password
//await Click on login button


//Promise is a object which is used to handle asynchronous operation in js
//Promise has three states
//1. Pending
//2. Fulfilled
//3. Rejected

const promise = new Promise((resolve, reject) => {

    let flag = true;

    if(flag)
    {
        resolve("Promise resolved");
    }
    else
    {
        reject("Promise rejected");
    }

});
