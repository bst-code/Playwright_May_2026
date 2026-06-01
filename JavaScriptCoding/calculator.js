
//Normal function with return type as void and no parameters
function add()
{
    let i = 10;
    let j = 20;
    let sum = i + j;
    console.log("The sum of " + i + " and " + j + " is: " + sum);
}

//Parameterized function with return type as void
function subtract(i, j)
{
    let difference = i - j;
    console.log("The difference of " + i + " and " + j + " is: " + difference);
}
//Parameterized function with default parameters and return type as void
function multiply(i=100, j=20)
{
    let product = i * j;
    console.log("The product of " + i + " and " + j + " is: " + product);
}

//return type as number and no parameters
function divide()
{    
    let i = 100;
    let j = 20;
    let quotient = i / j;
    return quotient;
}

add();
subtract(40,25);
multiply();
multiply(155, 10);
let answer = divide();
console.log("The quotient of 100 and 20 is: " + answer);


// Assignment 

//1. create a calculator class with methods for add, subtract, multiply, and divide
// add - no return type with default value for parameters
// subtract - no return type with parameters
// multiply - return type as number with parameters
// divide - return type as number with default value for parameters

//2. Write a program to find the age of a person using a function that takes the birth year as input and returns the age. Assume the current year is 2024.
