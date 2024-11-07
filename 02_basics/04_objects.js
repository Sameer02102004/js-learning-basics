const tinderUser ={}

tinderUser.id ="123aabc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

// const regularuser ={
//     email : "some@gamil.com",
//     fullname : {
//         userfullname : {
//             firstname : "hitesh",
//             lastname : "choudhary"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firstname);


/*======MERGING TWO OBJECTS===========================*/
// const obj1 = { 1 : "a" , 2 : "b" , 3 : "c"}
// const obj2 = { 4 : "d" , 5 : "e" , 6 : "f"}

// //const obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


