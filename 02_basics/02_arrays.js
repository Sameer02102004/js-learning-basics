// const num1 =[1,2,3,4,5,6]
// const num2 =[10,11,12,13]

// num1.push(num2)
// console.log(num1);

//const num3=num1.concat(num2);

// const num3 = [...num1,...num2]  //spread operator
// console.log(num3);


// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));

// let score1 = [1,2,3,4,5,6]
// let score2 = [9,8,7,6,5,9]
// let score3 = [10,12,13,14]
// console.log(Array.of(score1,score2,score3));


/*=========ARRAY DESTRUCTURING==========================*/

// const numbers = [1,2,3,4,5]

// const [first , second , third , fourth , fith] = numbers

// console.log(first);
/*=======================*/ 

const numbers = [1,2,3,4,5]

const [first , , third , ...rest] = numbers
console.log(rest);




