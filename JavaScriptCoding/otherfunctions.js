

const age = 30;

//arrow function
const addition = (a,b)=>
    {
        let output = a + b;
        console.log(output);
    }

console.log(age);
addition(5, 10);

//callback function


function getCustomerMobile()
{
    console.log("Mobile number is 1234567890");
}

function getCustomerDetails(name,callback)
{
    console.log(name);
    callback();
}

getCustomerDetails("John", getCustomerMobile);