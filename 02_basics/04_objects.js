// const tinderUser = new Object()  // Singleton object
// console.log(tinderUser); // {}

const tinderUser = {}              //  Non Singleton object
// console.log(tinderUser); // {}

// Both return {} empty object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }


// object inside another object

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullName); // { userFullName: { firstname: 'hitesh', lastname: 'choudhary' } }

console.log(regularUser.fullName.userFullName); // { firstname: 'hitesh', lastname: 'choudhary' }

console.log(regularUser.fullName.userFullName.firstname); // hitesh

// ? operator if value found or not 

// ============== Merge objects in javascript ===================

const obj1  = {1: "a", 2:  "b"}
const obj2  = {3: "a", 4:  "b"}
const obj4  = {5: "a", 6:  "b"}

// Method 1
// const obj3  = {obj1, obj2}
// console.log(obj3);  // comes objects inside object -- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Method 2   using assign
// const obj3  = Object.assign({},obj1,obj2,obj4)  // return target as object {} and others are sources obj1,obj2,obj4
// console.log(obj3);    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// Method 3 spread operator (Best)
// Latest and simple
const obj3 = {...obj1, ...obj2, ...obj4}   // kanch ka glass break example
// console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// Multiple object inside a array
// DB Related
const users = [
    {
        id: 1,
        email: "h@google.com"
    },
    {
        id: 2,
        email: "ch@google.com"
    },
    {
        id: 3,
        email: "chaudhary@google.com"
    }
]

users[1].email  // for 1st obj users[1] , for 2nd users[2]

console.log(tinderUser);   // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// return in a list datatype  ab hum ispar loop laga sakte hai V.Imp.

console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser)); //  return array of key value items  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true       return boolean value true/ false (check karne k liye ki property available hai ya nhi)

console.log(tinderUser.hasOwnProperty('jfgkjadgfjksdhf')); // false


// to know methods about object go to the wb browser console 

/*
const obj1 = {1: "a", 2: "b"}
obj1
*/
