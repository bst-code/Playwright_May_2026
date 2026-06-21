import { RBI } from "./RBI";

export class HDFC implements RBI
{
    getCutsomerID(): void {
        throw new Error("Method not implemented.");
    }

   
    //Own prop
    BankName = "HDFC BANK"
    getCarLoan():void
    {
        console.log("HDFC car loan starts from 10%...."); 
    }

    //Interface method implementation 
     getCustomerDetails(): void {
       console.log("HDFC bank gets customer name, email, aaddhar, pan and passport");
       
    }
    
    homeLoan: number =10

    connectDb(): void {
        throw new Error("Method not implemented.");
    }
    queryDb(): void {
        throw new Error("Method not implemented.");
    }
    closeDb(): void {
        throw new Error("Method not implemented.");
    }
}