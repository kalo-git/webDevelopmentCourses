// Learning outcomes:

/*
Basic number operations in JavaScript — add, subtract, multiply, and divide.
numbers are not numbers if they are defined as strings, and can cause calculations to go wrong.
Converting strings to numbers with Number().
Operator precedence.
Incrementing and decrementing.
Assignment and comparison operators.
Basic Math object methods, such as Math.random(), Math.floor(), and Math.ceil().
*/

// Types of numbers

/*
In programming, even the humble decimal number system that we all know so well is more complicated than you might think. We use different terms to describe different types of decimal numbers, for example:

#Integers are numbers without a fractional part. They can either be positive or negative, e.g. 10, 400, or -5.

#Floating point numbers (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.

We even have different types of number systems! Decimal is base 10 (meaning it uses 0–9 in each digit), but we also have things like:

#Binary — The lowest level language of computers; 0s and 1s.

#Octal — Base 8, uses 0–7 in each digit.

#Hexadecimal — Base 16, uses 0–9 and then a–f in each digit. You may have encountered these numbers before when setting colors in CSS.
*/



// Basic number operations

const int = 100;
const flo = 6.25;
const str = "099"; //this is a string not a number
int;
flo;

// typeof int;
// typeof flo;
// typeof str;


console.log(typeof(int)); 
console.log(typeof(flo));
console.log(typeof(str)); //this is a string not a number

// normal print this code:

console.log(int,flo,str);




// Arithmetic operators
/*
strt of comment

Arithmetic operators are used for performing mathematical calculations in JavaScript:

Operator	

+	Addition	        
-	Subtraction	        
*	Multiplication	    
/	Division	        
%	Remainder (sometimes called modulo)
**	Exponent	       

end of comment
*/


// Addition Operator

let a = 10;
let b = 5;

let sum = a + b;

console.log(sum);


