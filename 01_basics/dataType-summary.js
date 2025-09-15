// Type of DataTypes:
/*
There are two types of data types based on how data is stored and how it is accessed:
1. Primitive (Call by Value) => 
    7 types: String, Number, Bollean, null, undefined,Symbol(used to make unique to a value),BigInt
2. Non-Primitive (Call by Reference) =>
    3 type:- Array, Objects, Functions

*/


// To become the master of Js do practice of Js Objects and Browser Web Events.

// Note1 => JavaSript is a dynamic or static typed language?
/*
JavaScript is a dynamically typed language.
This means that:
Type checking occurs at runtime: The data type of a variable is determined when the code is executed, not during a compilation phase.
Variables can hold different data types: A single variable can be assigned values of various types (e.g., a number, then a string, then an array) throughout the program's execution without explicit type declarations.
Flexibility and quicker development: This dynamic nature offers flexibility and can lead to faster initial development, as developers don't need to explicitly declare types.
Potential for runtime errors: The lack of static type checking can mean that type-related errors might only be discovered during execution, rather than being caught earlier in the development cycle.
*/



// 1. Primitive (Call by Value) =>  Examples
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;     // datatype is undefined
// OR
// let userEmail = undefined;    // datatype is undefined

const id = Symbol('123') // symbol return a different datatype Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);    // false 

const bigNumber = 393465863496593459534n // will treat as bigInt due to n automatically
 
// I not got a chance to use bigInt



// 2. Non-Primitive (Call by Reference) =>

// Array =>
// Indian Super Heros (Array represent by [] square braket)
const heros = ["Shaktiman", "Naagraj","Doga"]

// Object => Represent by {} curly braces
let myObj =  {
    name: "Vinay",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(bigNumber)); //
console.log(typeof(outSideTemp)); // 
console.log(typeof(scoreValue)); // 


// Datatype of undefined => undefined
//             null => object


// M.Imp.
console.log(typeof(myFunction));  // function but called as function object


// datatype of non-primitive function 


console.log(typeof(anotherId));   //

// Link to Study: tc39




