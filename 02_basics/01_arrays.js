// Note => JavaScript array are resizable and can contain a mix of different data types 
// ============= M.Imp. =======================================
// Object Video-1
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


// // do practice in browser console 
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// there will be a protototype and one more protototype found


// Array Methods
myArr.push(6)
myArr.push(7)
console.log(myArr);  // [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop()
console.log(myArr); // remove last value
myArr.unshift(0)
console.log(myArr); // add 0 in starting   [0, 0, 1, 2, 3, 4, 5, 6]
myArr.unshift(9)
console.log(myArr); // add 9 in starting   [9, 0, 1, 2, 3, 4, 5, 6]

// Confusing
// myArr.shift()
// console.log(myArr); 


console.log(myArr.includes(9)); //  false // return true and false

console.log(myArr.indexOf(9)); // return -1 beacuse value not exist
console.log(myArr.indexOf(15)); // return -1 beacuse value not exist
console.log(myArr.indexOf(13)); //  3


const newArr = myArr.join()

// Value are same but type will be change 
console.log(myArr);    // [0, 1, 2, 3, 4, 5]
console.log(newArr);  // 0, 1, 2, 3, 4, 5



console.log(typeof myArr);
console.log(typeof newArr);  // string

// slice and splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);   // C [0, 4, 5]
console.log(myn2); // [1, 2, 3]


// Interview questions
// Difference b/w slice and splice
// slice work as range 
// splice manipulate the original array


// Go to the web Browser console

// const myArr = [1, 2, 3, 4]
// myArr        // 0: 1
//             // 1:2:
//             // 2:3:
//             // 3:4:
//             :> [[Prototype]]:Array(0)
//             // Array method

