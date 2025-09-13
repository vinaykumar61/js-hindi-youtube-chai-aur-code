"use strict"; // Treat all js code as newer version

// alert(3 + 3) // We are using nodejs , not browser
//alert() :- Will work on only in HTML or developer Console


console.log(3 + 3)  
console.log(3 
    + 3)  //Code readability should be high
    // Will work but Not a good practice
console.log("Hellow World")


/*
Read Documentation--


1.tc39:- Original Documentation
        For Standard of language--
        https://tc39.es/ecma262/#sec-intro
    eg:- loop,if ,else, (1 + 1)etc.

2.MDN:- Not a original documentation
        https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/


console.log("Vinay")

let name = "Vinay"
let age = 27
let isLogggedIn = false

// number => 2 to power 53
// bigint => 
// string => "" or '' prefer ""
// boolean => true/false
/* null => standalone value or datatype     M.Imp.
  (null is representation of empty value)
   undefined => variable declare but value not assign   M.Imp.
*/
// symbol => mostly used for uniqueness (react ,figma components,etc.)

// object => M.Imp.

console.log(typeof age);
console.log(typeof null);  // null is a object
console.log(typeof undefined);  // undefined is a type itself
