// Storing the information you need — Variables

// *-*

// Learning outcomes:

// 1. What variables are and why they are so important.
// 2. Declaring variables with let, initializing them with values, and reassigning with new values.
// 3 .Creating constants with const.
// 4. The difference between variables and constants, and when you would use each one.
// 5. Variable naming best practices.
// 6. The different types of value that can be stored in variables — strings, numbers, booleans, arrays, and objects.

// *-*

// What is a variable?
// A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.



// Why are variables important?
// Variables are important because they allow us to store values, and then refer to those values by name when we need to. This makes our code more readable and easier to maintain.

//  typo of variable:

  let fistName = 'Alice';
  var sarName = 'roy';
  const age = 25;
  location = 'Nepal';

 console.log(fistName, sarName, age, location);

//  chang a value name of variable:

 let firstName = 'giridhari';
 var sarName = 'karmakar'; // do not use *var* keyword because it is {block scope variable and functional scope} and it is not a good practice to use *var* keyword
 const age1 = 26; // do not change the value of *constant variable*
 location = 'india'; //it is not a good practice to declare a variable without using *let, var, const* keyword

 console.log(firstName, sarName, age1, location);


// When to use const and when to use let
// If you can't do as much with const as you can with let, why would you prefer to use it rather than let? In fact const is very useful. If you use const to name a value, it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to.

// In this course, we adopt the following principle about when to use let and when to use const:

// Use const when you can, and use let when you have to.

// This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.