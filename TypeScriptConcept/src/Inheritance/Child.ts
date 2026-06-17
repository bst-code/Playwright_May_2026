import { Parent } from "./Parent";

class Child extends Parent{

    //properties - variables and method 

    childName : string = "Mark"
   
    childProperty():void
    {
        console.log("Child owns 10 flat"); 
    }

}

const childObj = new Child()
childObj.childProperty()
childObj.parentProperty()
childObj.grandParentProperty()