// ============= M.Imp. =======================================
// Object Video-2
// Array part 2 in Javascript 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)  // array can take any data 
console.log(marvel_heros);

// ["thor", "Ironman", "spiderman",["superman", "flash", "batman"]]

// Good 
// const allHerors =marvel_heros.concat(dc_heros)
// console.log(allHerors);    // ["thor", "Ironman", "spiderman","superman", "flash", "batman"]



// Note: push change in existing array while concat change in new array


// ========++++ Always use Below method to (add,merge,join) 2 or more array => seprator method ++++===============
// M.Imp.
// Mostly use spread  eg:kanch ka glass lijiye aur usko drop kar diiye
const allHerors = [
    ...marvel_heros,
    ...dc_heros
    ]
console.log(allHerors);   // ["thor", "Ironman", "spiderman","superman", "flash", "batman"]



//  =============== multiple array ==================
const another_array = [1, 2, 3, [4, 5,6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // return all element in a single array in sequence 
// flat take one argument depth (number of array)  // there 3 depth means array

console.log(real_another_array);  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]




// Mostly used 


console.log(Array.isArray("Hitesh"))  // false 

console.log(Array.from("Hitesh"))    // to convert in array     // ['H', 'i', 't', 'e', 's', 'h']


console.log(Array.from(name: "Hitesh")) // interesting 
// ['H', 'i', 't', 'e', 's', 'h']  []



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// [100, 200, 300]



// Do more practice on array 
