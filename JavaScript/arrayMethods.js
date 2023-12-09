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