import { HDFC } from './HDFC';
import { RBI } from './RBI';

class ICICI implements RBI
{
    getCutsomerID(): void {
        throw new Error('Method not implemented.');
    }
    connectDb(): void {
        throw new Error('Method not implemented.');
    }
    queryDb(): void {
        throw new Error('Method not implemented.');
    }
    closeDb(): void {
        throw new Error('Method not implemented.');
    }
    getCustomerDetails(): void {
       console.log("ICICI collect customer PAN card only");
       
    }
    homeLoan: number=20
    
}

const city:string = "chennai"

let bankObj:RBI = new HDFC()
bankObj.getCustomerDetails()

// Class ---> extends --> other class
// Interface ---> extends --> interface1, interface2, interface3....
// Class ---> implements  --> interface1, interface2, interface3....