class Company{


    company_Name : string;
    company_address:string;
    readonly company_City :string

    constructor()
    {
        this.company_Name = "Bspark"
        this.company_address = "54,Civil aviation colony"
        this.company_City = "chennai"
    }

    profit():number
    {
         this.company_Name = "Bspark Robotic"
         console.log("Iam profit method")
        // this.company_City = "Mumbai"
        return 1000000;
    }

    otherBranch(areaName:string,city:string):void
    {
        console.log(this.company_Name)
        console.log(this.company_address)
        console.log(this.company_City)
        console.log(areaName);
        console.log(city)
        
    }

}

const obj1 = new Company();

obj1.otherBranch("Guindy", "Chennai")
const MyCompanyProfit = obj1.profit()

