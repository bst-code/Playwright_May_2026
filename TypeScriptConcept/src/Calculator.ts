class Calculator
{
    //Properties of class are variable, methods and constructor

    //variables
     a1:number = 30
     static a2 :number = 60
     readonly a3: number = 0

     //list
     names:any = ["Bala", "Raja", "Vijay", "Kumar", "Bala", "Bala",30, true,null]
     
    //functions
 add():void 
    {
        //let,cont 
        let sum = Calculator.a2 + this.a1
        console.log(sum)

        // this.a1 = 900
        // this.a3 = 1000
    }

    static sub():void 
    {
        //let,cont 
        let diff = Calculator.a2 - 1000
        console.log(diff)
    }
}
//Const = new classname()
const obj = new Calculator()
obj.add()
console.log(obj.a3)
Calculator.sub()

// obj.a1 = 50
// obj.a3 = 100