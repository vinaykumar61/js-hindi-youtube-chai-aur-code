// ****  Why string to number conversion is confusing  *****

///////// 1. Number Coversion      ////////

// let score = 33

// console.log(typeof score);    // number
// // OR
// console.log(typeof(score));   // number



// let score = "33"
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))   // 33 number


// let score = "33abc"
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))    // NaN  number  (Not a number)


// let score = null 
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))   // 0 number

// let score = undefined
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))   //NaN number


// let score = true
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))   // 1 number


// let score = false
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))   // 0 number

// let score = "Vinay"
// let valueInNumber = Number(score)
// console.log(valueInNumber, typeof(valueInNumber))   //NaN number 


// Note1:- typeof NaN   is number.

// "33"  => 33
// "33abc" => NaN
// true => 1
// false => 0


///////// 2. Boolean Coversion      ////////
// let isLoggedIn = 0
// let isLoggedIn = "Vinay"
// let valueInBoolean = Boolean(isLoggedIn)
// console.log(valueInBoolean, typeof(valueInBoolean)) // false boolean 


// Note:-   
// 1 =>  true; 0 =>   false
// "" => false
// "Vinay" => true        
//  All +ve and -ve numbers => true


///////// 3. String Coversion      ////////

// let someNumber = 33
// let stringNumber = String(someNumber)

// console.log(typeof(someNumber),someNumber); //  number 33
// console.log(typeof(stringNumber),stringNumber); //  string 33


// ***************** Operations **********************
// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);   // 4
// console.log(2-2);   // 0
// console.log(2*2);   // 2
// console.log(2**2);  // 4
// console.log(2**3);  // 8
// console.log(2/3);   // 0.6666666666666666
// console.log(2%3);   // 2

// let str1 = "hello"
// let str2 = " Vinay"
// let str3 = str1 + str2
// console.log(str3);  // hello Vinay


// Complex Situations

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2);   // 122  not a good way use parenthesis console.log("1" +( 2 + 2));
// console.log(1 + 2 + "2");   // 32   not a good way console.log((1 + 2) + "2");


// console.log(3 + 4 * 5 * 3); //  63

// Note 1 => if the string in starting conversion will not done

// Note 2 => if the string in end conversion will done

// Read tc39 documentation   
// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-operations 

// ****  Tricky Conversion ****

console.log(true);  // true
console.log(+true); // 1
// console.log(true+);  // error
console.log(+"");   // 0    no sense

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2  // Not prefer
num1 = num2 = num3 = 4  //  prefer


let gameCounter = 100
gameCounter++
console.log("postfix",gameCounter);

++gameCounter
console.log("prefix",gameCounter);

// Read prefix and postfix js mdn documentation
// Link to study 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



// ***************** Operations **********************


// JavaScript Type Casting & Conversion function list
// ChatGPT said:

// Here’s a comprehensive list of JavaScript type casting & conversion functions/methods (explicit + implicit).

// 🔹 1. String Conversion

// Convert other types → string

// String(value) → Explicit string conversion

// value.toString() → Works for most primitives & objects (except null, undefined)

// Template literals → `${value}`

// Concatenation → value + ""

// ✅ Examples:

// String(123);        // "123"
// (123).toString();   // "123"
// true + "";          // "true"
// `${false}`;         // "false"

// 🔹 2. Number Conversion

// Convert to number

// Number(value) → Explicit conversion

// parseInt(value, base) → Integer conversion

// parseFloat(value) → Floating-point conversion

// Unary plus → +value

// Arithmetic operations → value * 1, value / 1

// ✅ Examples:

// Number("42");       // 42
// parseInt("101", 2); // 5 (binary)
// parseFloat("3.14"); // 3.14
// +"99";              // 99
// "5" * 1;            // 5

// 🔹 3. Boolean Conversion

// Convert to boolean

// Boolean(value)

// Double negation → !!value

// Truthy → any non-zero number, non-empty string, object, array
// Falsy → 0, -0, "", null, undefined, NaN, false

// ✅ Examples:

// Boolean(0);     // false
// Boolean("hi");  // true
// !!123;          // true
// !!"";           // false

// 🔹 4. Object Conversion

// Primitive → Object

// Object(value) → Wraps value in its object form

// new String("hi"), new Number(10), new Boolean(true)

// {} (object literal)

// [] (array literal)

// ✅ Examples:

// Object(123);     // [Number: 123]
// Object("hi");    // [String: 'hi']
// new Boolean(0);  // [Boolean: false]

// 🔹 5. Date Conversion

// Convert to/from Date

// Date(value) → String form of date/time

// new Date(value) → Date object

// Date.parse(value) → Milliseconds since epoch

// Date.now() → Current timestamp

// ✅ Examples:

// new Date("2025-01-01");   // Wed Jan 01 2025 ...
// Date.parse("2025-01-01"); // 1735689600000
// Date.now();               // Current timestamp

// 🔹 6. JSON Conversion

// Convert objects ↔ strings

// JSON.stringify(value) → Object → JSON string

// JSON.parse(string) → JSON string → Object

// ✅ Examples:

// JSON.stringify({a:1}); // '{"a":1}'
// JSON.parse('{"a":1}'); // {a:1}

// 🔹 7. Implicit (Type Coercion)

// JS does automatic conversion in some cases

// String concatenation → "5" + 2 = "52"

// Arithmetic → "5" - 2 = 3

// Comparisons → == performs coercion, === does not

// ✅ Examples:

// "5" + 2;   // "52"
// "5" - 2;   // 3
// 1 == "1";  // true (coerced)
// 1 === "1"; // false (no coercion)

// 🔹 8. Utility & Edge Cases

// isNaN(value) → true if value is NaN after number conversion

// Number.isNaN(value) → true only if exactly NaN

// isFinite(value) → checks if number is finite

// Number.isFinite(value) → strict finite check

// Array.from(value) → Converts iterable/array-like to array

// [].slice.call(arguments) → Arguments → Array

// ✅ Summary Table

// Conversion To	Functions/Operators
// String	String(), .toString(), + "", `${}`
// Number	Number(), parseInt(), parseFloat(), +value, *1
// Boolean	Boolean(), !!value
// Object	Object(), new String(), new Number()
// Date	Date(), new Date(), Date.parse(), Date.now()
// JSON	JSON.stringify(), JSON.parse()
// Checks	isNaN(), Number.isNaN(), isFinite(), Number.isFinite()

// 👉 Do you want me to also create a cheat sheet with examples in a single table format (like a quick reference card)?