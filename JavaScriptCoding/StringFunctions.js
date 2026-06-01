let age = "30" 
console.log(age);
console.log(typeof age);

let firstname ="Balamurugan"
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname.length);
console.log(firstname.charAt(0));
console.log(firstname.indexOf("m"));
console.log(firstname.lastIndexOf("a"));
console.log(firstname.slice(0,4));

console.log(firstname.replace("Bala","Mala"));  
firstname =firstname.replace("Bala","Mala")

console.log(firstname);

console.log(firstname.includes("murugan"));
console.log(firstname.startsWith("Bala"));
console.log(firstname.endsWith("gan"));

let location = "Chennai_Tamilnadu_India_600001"
let city = location.split("_")[0] 
console.log(city);  

let count = "   10   "
console.log(count);
console.log(count.trim());
console.log(count.trimStart());
console.log(count.trimEnd());

let message = "Hello, World!"
console.log(message);
console.log(message.repeat(10))