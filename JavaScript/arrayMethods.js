let arr = [1, 2, 3, 4, 5, 6, 7];

// push      for last element
arr.push(8);
//u can add multiple elements
arr.push(8,9,10);
console.log(arr);

// pop          for last element
arr.pop();
console.log(arr); // remove last element

// shift            for remove first element
let f = arr.shift();

// unshift            for add first element
let g = arr.unshift("yusuf");

console.log(arr);

// These methods (pop, shift) returns what they remove
console.log(f); // it will print 1

// (push, unshift) 
console.log(g); // it will print total number of element after adding yusuf string

// concatinate
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); // this will print [1, 2, 3, 4, 5, 6]

// join 
let d = a.join("#");
console.log(d); // it will print a string of array a with seperated by # e.g 1#2#3

// reverse 
let e = a.reverse();
console.log(e); // it will print reverse array a, e.g ([3, 2, 1])

let x = [1, 2, 3, 4, "Hello", true, 5, 60];
let y = x.slice(3, 7); // y =  [4, "Hello", true, 5]
console.log(y);