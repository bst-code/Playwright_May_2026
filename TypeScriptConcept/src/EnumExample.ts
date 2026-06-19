//Enum - Enumeration - to store set of name constants 

// enum Statuses {
//     Passed,
//     Failed,
//     Pending,
//     Skipped
// }

enum Statuses {
    Passed = "Passed",
    Failed = "Failed",
    Pending ="Pending",
    Skipped ="Skipped"
}

enum BrowserType {
    CHROME = "chrome",
    WEBKIT = "webkit",
    FIREFOX = "firefox"
}

enum Env {
    QA = "www.qa.com",
    STG = "www.stg.com",
    UAT = "www.uat.com",
    Prod = "www.prod.com"
}


console.log(BrowserType.CHROME);

const Status = Statuses.Passed



if(Status === "Passed")
{
    console.log("Test cases is passed");
    
}