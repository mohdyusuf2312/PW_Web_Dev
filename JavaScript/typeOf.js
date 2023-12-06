console.log(typeof 1); // this will print number.

console.log(typeof typeof 1); // this will print string beacuse "typeof 1" gives a string that is "number" second typeof is like (typeof number) => string

console.log(typeof number); // this will produce undefined

// console.log(typeof number); != console.log(typeof "number");


const name = "PW Skills";

console.log(!typeof name === "objects");    // false
console.log(!typeof name === "string");     // false

// (typeof name) gives "string"
// here is ! mark that means not string on the left side
// while right side is string so the comparision are false