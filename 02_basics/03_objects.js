// M.M.Imp. ============================== Javascript  Objects to become Master===================

// Objects in depth in javascript in hindi ====== part 1 ========


// There are 2 ways to declare objects in javascfript 
// first one is like literal
// second one is like  constructor or singleton


// Kisi bhi constructor se jab object banate hai to singleton kaha jata hai (means ye apne tarah ka ek hi object hai)  but other cases m multiple instences bante hai

// ===== Remember when ask in interview  ====
// Note 1 => Jab literal se object banate hai to object  singleton nhi banta (multiple banta hai)
// Note 2 => Jab constructor se object banate hai singleton object banta hai. 


// Object.create  // create by constructor will create singleton


//1. Object literals
// const JsUser = {}  // object

// How to declare symbol

const  mySym = Symbol("key1")
// Interview question: ek symbol create karo and usko object ki key m add karke usko print karke dikhao


const JsUser = {
    name: "Vinay",
    "full name": "Vinay Kumar",
    // mySym: "myKey1", // will work but datatype string aayega jabki symbol aana chahiye
    [mySym]: "mykey1", // correct method  // Symbol as the key, string as the value
    // [mySym]: mySym, // Symbol as the key, Symbol as the value
    age: 18,
    location: "Uttar Pradesh",
    email: "vinay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log("JsUser_Value",JsUser);
// Ouput--
// JsUser_Value {
//   name: 'Vinay',
//   'full name': 'Vinay Kumar',
//   age: 18,
//   location: 'Uttar Pradesh',
//   email: 'vinay@google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

// M.Imp. object ki value ko access karna and iske tarike 2 ways only [. and [] square brackets]
console.log("JsUser.email",JsUser.email);    
// console.log(JsUser[email]);  // will raise error  email is not defined because email ko as a variable treat kargea  
console.log('JsUser["email"]',JsUser["email"]);


// Note: By default system key ko as a string process karta hai agar string m bhi nhi denge tab bhi name ko "name" consider karega


// console.log(JsUser.full name); We can not access by .
// console.log(JsUser."full name"); We can not access by .
// console.log(JsUser["full name"]);  // only access by []
console.log("JsUser.mySym",JsUser.mySym);  // undefined
console.log(typeof JsUser.mySym);  
console.log("JsUser[mySym]",JsUser[mySym]);  // key1
console.log(typeof JsUser[mySym]);  // string (datataype of value not key )


// to change value of object key
JsUser.email ="hitesh@google.com"
console.log("JsUser.email after change",JsUser.email);
Object.freeze(JsUser)
JsUser.email ="muddu@google.com"
console.log("JsUser.email after 2nd time change",JsUser.email);


/*
output--
JsUser.email after change hitesh@google.com
JsUser.email after 2nd time change hitesh@google.com
*/



// M.Imp. Note =>
console.log(JsUser.mySym);   // ❌ undefined
console.log(JsUser[mySym]);  // ✅ "mykey1"
// M.Imp. Note =>


// ================== Symbol Practice =======================
const mySym2 = Symbol("key2");

const JsUser2 = {
  [mySym2]: "myKey2"   // Symbol as the key, string as the value
};
console.log(JsUser2[mySym2]); // myKey2
console.log(typeof JsUser2[mySym2]); // string

// => Here:

// => Key = mySym2 (a Symbol)

// => Value = "myKey2" (a string)

// => That’s why typeof JsUser[mySym2] → "string".


// If you also want the value to be a Symbol, you can do this:
const mySym3 = Symbol("key3");
const valSym3 = Symbol("val3");

const JsUser3 = {
  [mySym3]: valSym3   // Symbol as the key, Symbol as the value
};

console.log(JsUser3[mySym3]);  // Symbol(val3)
console.log(typeof JsUser3[mySym3]);  // "symbol"
// ================== Symbol Practice =======================