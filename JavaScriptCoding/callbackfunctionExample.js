function getCustomerMobile()
{
    console.log("Mobile number is 1234567890");
}

function getCustomerAddress()
{
    console.log("Address is 123 Main Street");
}

function getCustomerDetails(name)
{
    console.log(name);
    getCustomerMobile();
    getCustomerAddress();
}

function getCustomerDetailsWithCallback(name, callback, callback2)
{
    console.log(name);
    callback();
    callback2();
}

// getCustomerDetails("John");
// getCustomerDetailsWithCallback("John", getCustomerMobile);
// getCustomerDetailsWithCallback("John", getCustomerAddress); 
getCustomerDetailsWithCallback("John", getCustomerMobile, getCustomerAddress);