
// 1 Add Two Integers

/*
Problem Statement:
Write a function addTwoNumbers(a, b) that takes two integers a and b and returns their sum.  

Constraints:  
-10^3 ≤ a, b ≤ 10^3
*/

console.log("1 Add Two Integers\n");


// this is normal code of add two numbers:

let a = 10;
let b = 5;

let sum = a + b;


console.log("this is normal code of add two numbers:");
console.log('a + b is ' , sum, "\n");


// this is function sum of add two numbers :

function addTwoNumbers(a, b) {
    return a + b;
}

const reajel = addTwoNumbers (10, 5); 

console.log("this is function code of add two numbers:");
console.log('Tha Sum of two number is ', reajel, "\n" );


//2. Concatenate Strings

console.log("2. Concatenate Strings\n");
/*
Write a function `concatenateStrings(str1, str2)` that takes two strings `str1` and `str2` and returns their concatenation.  

Constraints:
`1 ≤ str1.length, str2.length ≤ 100`
*/

function concatenateStrings(str1, str2) {
    return str1 + str2;
}   

const result = concatenateStrings('Hello ', 'World');
console.log("this is function code of concatenate two strings:", result, "\n");
