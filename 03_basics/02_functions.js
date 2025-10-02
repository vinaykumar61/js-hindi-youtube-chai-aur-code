// Video -20

// ================  Javascript Function Part - 2   ==================


// First function
function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200));   
// ✅ Output: 200 (because you return the single argument directly).

console.log(calculateCartPrice(600,700,900));   
// ✅ Output: 600 (because you return the single argument directly).


// Second function
// ... rest operator when use in function as parameter
function calculateCartPriceForMultipleInputs(...num1){ 
  return num1;
}

// Here, the rest operator (...) collects all arguments into an array.
console.log(calculateCartPriceForMultipleInputs(200, 300));   // return array [200, 300]
console.log(calculateCartPriceForMultipleInputs(200, 300, 400)); // return array [200, 300, 400]
console.log(calculateCartPriceForMultipleInputs(200, 300, 400, 500)); // return array [200, 300, 400]



// Third function (your redefinition overwrites the second one)
function calculateCartPriceForMultipleInputs(num1, num2, ...num3){ // ... rest operation when use in function as parameter
    return num1;
}


// Important: In JavaScript, the latest function declaration with the same name overwrites the previous one.
// So this new version is the one that will run.

    // num1 = first argument

    // num2 = second argument

    // ...num3 = array of the rest

// But you are only returning num1.

// So:

console.log(calculateCartPriceForMultipleInputs(200, 300));   
// → 200   (num1 = 200, num2 = 300, num3 = [])

console.log(calculateCartPriceForMultipleInputs(200, 300, 400)); 
// → 200   (num1 = 200, num2 = 300, num3 = [400])

console.log(calculateCartPriceForMultipleInputs(200, 300, 400, 500)); 
// → 200   (num1 = 200, num2 = 300, num3 = [400, 500])

// ✅ Final Answer:
// All three console.log calls with the last definition will return:

// 200
// 200
// 200




// Perfect 👍 If you want to return all arguments as an array even when you define your function like this:

function calculateCartPriceForMultipleInputs(num1, num2, ...num3){
    // something here
}


// you have a couple of options:

// ✅ Option 1: Use [num1, num2, ...num3]
function calculateCartPriceForMultipleInputs(num1, num2, ...num3){
    return [num1, num2, ...num3];  // spread rest into array
}

console.log(calculateCartPriceForMultipleInputs(200, 300));           
// [200, 300]

console.log(calculateCartPriceForMultipleInputs(200, 300, 400));      
// [200, 300, 400]

console.log(calculateCartPriceForMultipleInputs(200, 300, 400, 500)); 
// [200, 300, 400, 500]

// ✅ Option 2: Use the arguments object

// Every normal function in JS has an arguments object containing all passed values (not available in arrow functions).

function calculateCartPriceForMultipleInputs(num1, num2, ...num3){
    return Array.from(arguments);  // turn arguments into a real array
}

console.log(calculateCartPriceForMultipleInputs(200, 300));           
// [200, 300]

console.log(calculateCartPriceForMultipleInputs(200, 300, 400));      
// [200, 300, 400]

console.log(calculateCartPriceForMultipleInputs(200, 300, 400, 500)); 
// [200, 300, 400, 500]


// 👉 Best practice is Option 1 (using rest/spread), because arguments is older and not as clean.

const user = {
  username: "Vinay Kumar",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}



// handleObject(user); // Username is Vinay Kumar and price is 199

// OR we can pass an object in function as a parameter
handleObject({
  username: "Sam",
  price: 7090
})   // Username is Sam and price is 7090


// OR we can pass an array in function as a parameter

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 400

// OR

console.log(returnSecondValue([200, 400, 600, 800])); // 400
