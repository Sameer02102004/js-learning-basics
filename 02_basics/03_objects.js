/*=========OBJECT LITERALS==========================*/

const jsUser ={
    name : "hitesh",
    "full name":"hitesh choudhary",
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);


// jsUser.email ="hitesh@chatgpt.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
// jsUser.email="hitesh@microsoft.com"
// console.log(jsUser["email"]);

/*=================================================================*/


jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js user , my self ${this.name} and of age ${this.age}`);
    
}
jsUser.greetingTwo()





