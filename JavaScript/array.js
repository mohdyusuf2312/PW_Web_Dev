let numbers = [1,2,3];
// another syntax to initialize array 
// let arr = new Array(10);
// let arr1 = new Array(1, 2, 3, "Hello", true);


numbers[10] = 11;
console.log(numbers); // it will print [1, 2, 3, <7 empty item>, 11]

console.log(numbers[15]);  // it will print undefined in javascript while it will throw error in c/c++

// array is mutable
a[2] = "Hello";