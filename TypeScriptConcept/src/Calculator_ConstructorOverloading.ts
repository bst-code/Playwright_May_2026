class Calculator1
{
    x:number = 0
    y:number = 0


    constructor()
    constructor(i:number, j:number)
    constructor(i:number,j:number,k:number)
    constructor(i:string,j:string,k:string)
    constructor(i:string,j:string,k:boolean)

    constructor(i?:any ,j?:any,k?:any)
    {
       if(i !== undefined && j !==undefined && k!==undefined)
       {
         console.log("Three parameters called")

       }else if(i !==undefined && j!==undefined)
       {
         console.log("Two parameters called")
         this.x =i
         this.y =j
       }
      
       else
        {
            console.log("Default constuctor is called - no parameters")
        }
    }
}

const obj2 = new Calculator1()
// const obj3 = new Calculator1(90,50)
// const obj4 = new Calculator1(70,80,90)
const obj5 = new Calculator1("a","b",true)