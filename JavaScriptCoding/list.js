const name = "Bala"
console.log(typeof name);


//Array = LIST
//Duplicate allowed, Index based, ordered, mutable
const names = ["Bala", "Raja", "Vijay", "Kumar", "Bala", "Bala",30, true,null]
console.log(typeof names);
console.log(names);
//Accessing the elements in the array
console.log(names[0]);
console.log(names[1]);  

console.log(names.length);

//Adding the element in the array
names.push("Suresh");
console.log(names); 
//Removing the element in the array
names.pop();
console.log(names);
//Adding the element in the array at the beginning
names.unshift("Suresh");
console.log(names); 
//Removing the element in the array at the beginning
names.shift();
console.log(names);

//updateing the element in the array
names[0] = "John";
console.log(names);
names[7] = false;
console.log(names);

//deleting the element in the array
//delete names[2];
//console.log(names); 

//Iterating the array
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//for of loop
for(let name of names){
    console.log(name);
}

console.log(names.indexOf("Bala")); //4
console.log(names.lastIndexOf("Bala"));//5

console.log(names.includes("Bala")); //true
console.log(names.includes("Suresh")); //false  

console.log(names.slice(0,3)); //["John", "Raja", "Vijay"]
console.log(names.slice(3)); //["Kumar", "Bala", "Bala", 30, true, null, false]

// Assignment 

//1. Remove duplicates from the array of fruits and print the unique fruits.

// original list [apple, banana, orange, apple, grape, banana]
// unqiue list [apple, banana, orange, grape]