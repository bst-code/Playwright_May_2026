// Set --> No duplicate values allowed, unordered collection of unique values, can contain any type of data, and is iterable.

// Create a set
const names = new Set();
console.log(typeof names); // object

names.add("John");
names.add("Jane");
names.add("John"); // Duplicate value, will not be added
names.add(30); // Adding a number
names.add(true); // Adding a boolean

console.log(names); // Set(4) { 'John', 'Jane', 30, true }

// Check if a value exists in the set
console.log(names.has("John")); // true
console.log(names.has("Doe")); // false

//size of the set
console.log(names.size); // 4   

// Remove a value from the set
names.delete("Jane");
console.log(names); // Set(3) { 'John', 30, true }  

// Iterate over the set
for (const name of names) {
    console.log(name);
}

names.forEach(name => {

    console.log(name);
    console.log("Myname is " + name);
    
}); // John, 30, true


// Clear the set
names.clear();
console.log(names); // Set(0) {}    

// Assignment 
// Create a set of unique colors and add some colors to it. Then, check if a specific color exists in the set and iterate over the set to print all the colors.
// Remove duplicate values from an array using a set. For example, given an array of numbers, create a set to store only unique numbers and then convert it back to an array.