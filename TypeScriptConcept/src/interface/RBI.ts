
//Data hiding - 100% abstraction 


export interface RBI extends Database,customer
{
// abstract method - method without body or implementation 
getCustomerDetails():void;

// constants 
homeLoan:number
}


// class HDFC 
// {
//     //Variable
//     //function
//     //constructor 
// }