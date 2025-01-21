
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
// this is function code of add two strings:
function concatenateStrings(str1, str2) {
    return str1 + str2;
}   

const result = concatenateStrings('Hello ', 'World');
console.log("this is function code of concatenate two strings:", result, "\n");

// normal code of add two strings:
let str3 = 'giridhari ';
let str4 = 'karmakar';

const myFullName = str3 + str4;

console.log("My full Name is ", myFullName, "\n");

// 3. Mixed Addition

/* Problem Statement: 

Write a function `mixedAddition(a, b)` that takes two inputs, where one is a string and the other is a number. Return the result of adding them.  

Constraints:  

- `a` or `b` will always be a string, the other will always be a number.  
- `1 ≤ |a| ≤ 100`  
- `-10^3 ≤ b ≤ 10^3`

--- */


function mixedAddition (a,b){
    a = "giri ";
    b = 7577
    sum = a+b

    return sum;

}
 const sumOf = mixedAddition ();

 console.log(sumOf, "\n")


//  4. Sum of Array Elements
/*
Problem Statement:

Write a function `sumArray(nums)` that takes an array of numbers and returns their sum.  

Constraints:

- `1 ≤ nums.length ≤ 10^3`  
- `-10^3 ≤ nums[i] ≤ 10^3`
*/

function sumArray (nums){
    total = 0
     for (let num of nums){
        total += num

     }
return total;


}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, -2, -3, 4, 5])); // Output: 3
console.log(sumArray([])); 

// 5. String to Integer Addition 

/*
problem Statement:

Write a function `addStringAndNumber(str, num)` that converts the string `str` to an integer and adds it to the number `num`.  

Constraints:

- `str` will always represent a valid integer.  
- `-10^3 ≤ int(str), num ≤ 10^3`
*/



function addStringAndNumber (str,num){
 str = "giri "
 num = 12345
 sumOfadd = str + num

 return sumOfadd;

}
const addMy = addStringAndNumber ();

console.log (addMy, "\n")