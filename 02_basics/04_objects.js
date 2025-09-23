// ============ Objects in Javascript part 2 ================

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

// console.log(regularUser.fullName); // { userFullName: { firstname: 'hitesh', lastname: 'choudhary' } }

// console.log(regularUser.fullName.userFullName); // { firstname: 'hitesh', lastname: 'choudhary' }

// console.log(regularUser.fullName.userFullName.firstname); // hitesh

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

// console.log(tinderUser);   // { id: '123abc', name: 'Sammy', isLoggedIn: false }


// =============== M.Imp. Methods ======================================================

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// // return in a list datatype  ab hum ispar loop laga sakte hai V.Imp.

// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser)); //  return array of key value items  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true       return boolean value true/ false (check karne k liye ki property available hai ya nhi)

// console.log(tinderUser.hasOwnProperty('jfgkjadgfjksdhf')); // false


// to know methods about object go to the wb browser console 

/*
const obj1 = {1: "a", 2: "b"}
obj1
*/




// ================ Objects in Javascript part 3 ========================

// Object de-structure and JSON API intro


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor); // hitesh

const {courseInstructor} = course  
console.log(courseInstructor);    // hitesh


const {courseInstructor: instructor} = course   // rename or destructured to an object
console.log(instructor);    // hitesh




// ==================################### JSON API     ####################################============================

// json object ki tarah dikhta hai        {} 

// api in object format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// json m key as an string hoti hai "" double quotes m 


// api in array format
[
    {},
    {},
    {}
]

//famous:   randomuserme api
// json formatter tool to understand the json api--    https://jsonformatter.org/


// How to use
// You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return. If you are using jQuery, you can use the $.ajax() function in the code snippet below to get started.

// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });


// Json 
// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
//famous:   randomuserme api

// store json into a object to perform action

// Practice on your JSON data

// Here’s how you can access values in your given JSON (example in JavaScript):
const data = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

// Practice on above api...pending
// ✅ Accessing some values
console.log(data.results[0].name.first);   // Jennie
console.log(data.results[0].name.last);    // Nichols
console.log(data.results[0].location.city); // Billings
console.log(data.results[0].email);        // jennie.nichols@example.com
console.log(data.results[0].dob.age);      // 30
console.log(data.results[0].picture.large);// profile image URL


// Mini Exercise (Try yourself)

// Print the full name (title + first + last).

// Print the latitude and longitude.

// Print the seed from the info object.

// Show the phone + email in one string.







// ====================== What is JSON ? =======================





// JSON stands for JavaScript Object Notation.

// It is a lightweight data-interchange format that is easy for humans to read/write and easy for machines to parse/generate. JSON is commonly used to transfer data between a server and a client (for example, between a backend API and a frontend application).

// Key Points about JSON:

//  Text-based format, language-independent (not only for JavaScript).// using in all language like python,php,java etc.

//     Data stored as key–value pairs.

//     Keys must be strings (enclosed in double quotes).

//     Values can be:

//         String ("Hello")

//         Number (123, 12.5)

//         Boolean (true / false)

//         Null (null)

//         Object ({ ... })

//         Array ([ ... ])

// Example:
// {
//   "name": "Vinay",
//   "age": 25,
//   "isStudent": false,
//   "skills": ["Python", "JavaScript", "SQL"],
//   "address": {
//     "city": "Bengaluru",
//     "pincode": 560001
//   }
// }



// Interview Question 

// JSON vs JSON API
// JSON

// What it is: A data format (plain text) used for storing and exchanging data.

// Example:

// {
//   "name": "Vinay",
//   "age": 25,
//   "isStudent": false
// }

// JSON API

// What it is: A specification (standard) for how APIs should structure their requests and responses using JSON.

// It defines rules like:

// How to format resources (data, attributes, relationships).

// How to include metadata, links, errors, pagination, etc.

// It’s not just “any JSON” — it’s JSON with a strict structure designed for APIs.

// Example (JSON:API response):

// {
//   "data": {
//     "type": "users",
//     "id": "1",
//     "attributes": {
//       "name": "Vinay",
//       "age": 25
//     }
//   }
// }


// 👉 So:

// JSON = format (like a language for data).

// JSON API = standard that tells developers how to use JSON for REST APIs.
// ==================################### JSON API     ####################################============================