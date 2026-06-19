
export class Customer 
{
    //Access modifier - public , private, protected

   public name:string = "Bala" // Public
   protected location:string = "chennai"

   //Encapsulation is the concept of hiding the internal data of a class and allowing access to it only through methods.
  //getter and setters - which is going to get and set value of private variables
   private age:number = 40

   private getLocation()
   {
    console.log(this.location);
    
   }
  getAge():number
  {
    return this.age
  }

  setAge(n1:number):void
  {
    this.age = n1
  }

}

const obj10 =new Customer()
const x = obj10.getAge()
console.log("x ---> ",x);

obj10.setAge(100)

const x1 = obj10.getAge()
console.log("x1 ---> ",x1);

console.log(obj10.name)


