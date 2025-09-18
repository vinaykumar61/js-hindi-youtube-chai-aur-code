const name = "Vinay"
const repoCount = 50

console.log(name + repoCount + " Value"); //Vinay50 Value
// Not prefer old way

// use ``(backtics)  => string interpolation


// Always use new method set placeholder
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Hello my name is Vinay and my repo count is 50

// Two ways to create string =>
let gameName = new String('hitesh-hc')  // new is object 
let email  = "vinay@gmail.com"

console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}  object
console.log(gameName.length);
console.log(gameName.toUpperCase());  // will not change original value due stack memory used 

// see the all method in browser console  
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4) // slicing  (-8,4) consider only positive take 0 to 4 
console.log(newString); // hite

const anotherString = gameName.slice(-8,4)  
console.log(anotherString); // ite

const newStringOne = "    hitesh      "
console.log(newStringOne.trim());     // remove white space from both side (start and trimend)

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // find replace


// search
console.log(url.includes('sundar'))   // false    will return true or false



// convert string to array based '-',' ',etc.
console.log(gameName.split('-'));   // take 2 arg seprator and limit


// Examples of all strings method


// see method list in browser console




