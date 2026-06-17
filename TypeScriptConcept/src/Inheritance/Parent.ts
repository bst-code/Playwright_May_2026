import { GrandParent } from "./GrandParent";

export class Parent extends GrandParent{

    //properties - variables and method 

    parentName : string = "John"

    parentProperty():void
    {
        console.log("Parent owns farm land");
        
    }

}