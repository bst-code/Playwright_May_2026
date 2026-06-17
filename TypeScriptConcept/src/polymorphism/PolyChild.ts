
//overridding - Child class will have same method signature as of parent class
// Parent child relatationship 

import { PolyParent } from "./PolyParent";

class PolyChild extends PolyParent
{

    display():void
    {
        console.log("Iam display method from child class")
    }
}

const poly = new PolyChild()
poly.display()