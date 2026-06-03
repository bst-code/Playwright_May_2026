// Map concept - Key value pairs, where each key is unique and maps to a specific value. Maps can have keys of any type, including objects and functions. They maintain the order of insertion and are iterable.

// Create a map
const customerDetails = new Map();
console.log(typeof customerDetails); // object

customerDetails.set("name", "Bala");
customerDetails.set("age", 28);
customerDetails.set("isMember", true);  
customerDetails.set("name", "John"); // Duplicate key, will overwrite the previous value

console.log(customerDetails); // Map(3) { 'name' => 'John', 'age' => 28, 'isMember' => true }   

// Get a value from the map
console.log(customerDetails.get("name"));

// Check if a key exists in the map
console.log(customerDetails.has("age")); // true
console.log(customerDetails.has("address")); // false

// Size of the map
console.log(customerDetails.size); // 3 

// Remove a key-value pair from the map
customerDetails.delete("isMember");
console.log(customerDetails); // Map(2) { 'name' => 'John', 'age' => 28 } 

// get all keys and values from the map
console.log(customerDetails.keys()); // MapIterator { 'name', 'age' }
console.log(customerDetails.values()); // MapIterator { 'John', 28 }
console.log(customerDetails.entries()); // MapIterator { [ 'name', 'John' ], [ 'age', 28 ] }

// Iterate over the map
for (const [key, value] of customerDetails) {
    console.log(`${key}: ${value}`);
}   

customerDetails.forEach((value, key) => {
    console.log(`${key}: ${value}`);    }); // name: John, age: 28

// Clear the map
customerDetails.clear();
console.log(customerDetails); // Map(0) {}  

// Assignment
// Get the count of each unique word in a given string using a map. For example, given the string "Balamurugan", create a map to store the count of each unique word and then print the counts.