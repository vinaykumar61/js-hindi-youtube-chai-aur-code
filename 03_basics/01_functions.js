// Video -19

// ================  Javascript Function Part - 1   ==================
// What is functions ?
// ✅ What is a Function?

// A function is like a reusable block of code that performs a specific task.
// You can define it once, and then call (use) it whenever you need.

// 🛠 Why use functions?

// 1. Reusability → Write once, use multiple times.

// 2. Organized code → Break big problems into smaller steps.

// 3. Avoid repetition → Don’t copy-paste same logic everywhere.

// 4. Maintainability → Easier to fix or update code.




// console.log("V");
// console.log("I");
// console.log("N");
// console.log("A");
// console.log("Y");

// print above 5 lines 100 times 


// Answer: 
// bind in a function call number of times

function sayMyName(){

}

// function : keyword
// sayMyName : function neme
// {} : function scope
// (){}: syntax


// sayMyName   // defintion or reference of function
// sayMyName()   // () execution of function


// no need to mention datatype of variable
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}

// addTwoNumbers()  // NaN
// addTwoNumbers(3, 4)  // 7
// addTwoNumbers(3, "4")  // 34 isne socha  4 string hai to 3 bhi string hoga
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3


// Parameters and Arguments m kya difference hai?
// function ki definition m jo bhi inputs lete hai unko parameters bolte hai 

// aur jab function ko call tab jo usme value dete hai unko bolte hai arguments
// let result = addTwoNumbers(4,6) 
// console.log("Result:",result);  
// 10
// Result: undefined     // kyuki function m hamne kuch return nhi kiya


function addThreeNumbers(number1, number2, number3){

    // let sum = number1 + number2 + number3;
    // return sum
    // console.log(number1 + number2 + number3); // code will not execute after return 
    
    return number1 + number2 + number3;
}

let result2 = addThreeNumbers(5, 7, 12)
console.log("Result2:",result2);    // why it is 24


function loginUserMessage(username){
    return `${username} just logged in`

}

loginUserMessage("Vinay Kumar")  // print nhi hoga kyuki console nhi kiya
console.log(loginUserMessage("Vinay Kumar")); // Vinay Kumar just logged in
console.log(loginUserMessage("")); // just logged in
console.log(loginUserMessage());   // undefined just logged in

function registerUserMessage(username){
// function registerUserMessage(username = "Vinay"){ // default value to avoid undefined
    if (username === undefined){
        console.log("Please enter a username");
        return ;
    }
    // OR
    // if (!username){     if username is undefined
    //     console.log("Please enter a username");
    //     return ;
    // }
    return `${username} just registered in`

}
console.log(registerUserMessage());
// Please enter a username
// undefined   // ye undefined isliye aaya kyuki humne to return hamne kuch kiya hua to undefined aayega




// Practice By ChatGpt 
// Function Syntax in JavaScript
// 1. Basic Function Declaration
function functionName(parameters) {
  // body of the function
  return value;   // (optional)
}
// function → keyword to declare a function.

// functionName → any valid name (camelCase is common).

// parameters → inputs (like variables, optional).

// return → sends back a result (optional).

// Example:

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Vinay"));  // Output: Hello, Vinay!


// 2. Function Expression (Anonymous function)

// Here, function is stored in a variable.

const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// 3. Arrow Function (ES6)

// Shorter way to write functions.

const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(4, 2)); // Output: 8
// 👉 If function body has only one line, you can omit {} and return:
const square = n => n * n;
console.log(square(6)); // Output: 36

// 4. Default Parameters

// You can give default values to parameters:

function sayHello(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(sayHello());        // Hello, Guest!
console.log(sayHello("Vinay")); // Hello, Vinay!


// 5. Returning vs Not Returning

// If you use return, function sends back a value.

// If you don’t use return, it returns undefined by default.

function noReturn() {
  console.log("I don’t return anything!");
}
console.log(noReturn()); // Output:
                         // I don’t return anything!
                         // undefined


// ⚡ So, in short:

    // Declaration: function name(params) { ... }

    // Expression: const fn = function(params) { ... }

    // Arrow: const fn = (params) => { ... }

