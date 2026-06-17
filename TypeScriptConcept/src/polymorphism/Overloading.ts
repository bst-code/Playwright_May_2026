class calculator 
{
    //method overloading - Same method name with different parameter or data type 
    // Multiple declaration with single implementation 

    add(n1:number, n2:number): void;
    add(n1:number, n2:number,n3:number): void;
    add(n1:number, n2:number,n3:number,n4:number): void;

    add(n1:number, n2:number,n3?:number,n4?:number):void 
    {
        if(n3 !== undefined && n4 !==undefined)
        {
            console.log(n1+n2+n3+n4)
        }else if(n3 !==undefined && n4 == undefined)
        {
            console.log(n1+n2+n3)
        }else
            {
                console.log(n1+n2)
            }
    }
}

const overloading = new calculator()
overloading.add(1,2) //3
overloading.add(1,2,3) //6
overloading.add(1,2,3,4) //10