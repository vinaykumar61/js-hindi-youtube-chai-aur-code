const accountId = 144553     // Not change
// Variable declare pattern (accountId or account_id or account_Id all are right . variable must be meaningfull and more readable)
let accountEmail = "vinay@google.com"
var accountPasword = "12345"
accountCity = "Meerut"

// accountId = 2   // Not allowed

accountEmail = "vk@vk.com"
accountPasword = "2121212121"
accountCity = "Bengaluru"
console.log("accountId:",accountId)
let accountstate;
console.table([accountId,accountEmail,accountPasword,accountCity, accountstate])

/*
Output-- 
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │    144553    │
│    1    │ 'vk@vk.com'  │
│    2    │ '2121212121' │
│    3    │ 'Bengaluru'  │
└─────────┴──────────────┘
*/


// Differnece b/w const,let and var 

// const -> To create constant variable

// let & var -> To create changeable variable


/*
Note1:-  Don't use var 
        Prefer not to use var  because of issue in block cope
        and functional scope

Note2:- We can create a variable in js without using keyword(const, let and var)
        eg:-   accountCity = "Meerut"
                console.log("accountCity:",accountCity)

Note3:-  If we don't know the value then
        let accountstate;
        console.log("accountstate:",accountstate)
        accountstate: undefined
*/