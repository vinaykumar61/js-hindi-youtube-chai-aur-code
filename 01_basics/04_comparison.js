// ========== Comparison of datatypes in javascript ========

// Simple and return output in boolean
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// Conversion with different datatype

console.log("2" > 1);   // true (convert automatically in number)
console.log("02" > 1);   // true (convert automatically in number)


// typescript(language) => not allowed Conversion with different datatype

// Avoid this type of conversion (sometimes null will convert in NaN and 0)
// Write neet and clean code for more readability
/*
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true  js converted null to 0

console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
*/

// Strict Check  (Datatype and value check)

console.log("2" == 2);
console.log("2" === 2);
