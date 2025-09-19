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
    mySym: "myKey1", // will work but datatype string aayega jabki symbol aana chahiye
    [mySym]: "myKey1", // correct method
    age: 18,
    location: "Uttar Pradesh",
    email: "vinay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// M.Imp. object ki value ko access karna and iske tarike 2 ways only [. and [] square brackets]
console.log(JsUser.email);    
// console.log(JsUser[email]);  // will raise error  email is not defined because email ko as a variable treat kargea  
console.log(JsUser["email"]);


// Note: By default system key ko as a string process karta hai agar string m bhi nhi denge tab bhi name ko "name" consider karega


// console.log(JsUser.full name); We can not access by .
// console.log(JsUser."full name"); We can not access by .
console.log(JsUser["full name"]);  
console.log(JsUser.mySym);  
console.log(typeof JsUser.mySym);  
console.log(JsUser["mySym"]);  
console.log(typeof JsUser["mySym"]);  

