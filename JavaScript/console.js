console.log("Welcome"[0]); // This will print first character.

// let name = "Hello";
// console.log(name()); // this is type error

let one = false || {} || null;    // null is falsy
let two = null || false || "";    // flase is also falsy
let three = [] || {} || null;     // "" empty string is also falsy

                                  // true, {}, [] all are truthy
console.log(one, two, three);     // ||(OR operator) checks first truly element, its checks from left to right
                                  // if no one is truthy it will assign last element like in two variable all are falsy (it assign "")