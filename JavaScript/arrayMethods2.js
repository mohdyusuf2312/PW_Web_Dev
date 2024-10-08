// forEach                      // forEach gives you only value and you can't use return keyword in forEach.

let arr = [200, 300, 310, 250, 150, "str", "str", 310];
let sum = 0; 

// let result1 = arr.forEach((ele) => {
//     return sum += ele;
// });

// console.log(result1);

arr.forEach((ele) => {
    sum += ele;
});
console.log(sum);

// map                      // map will gives you array and you can use return keyword in map.

sum = 0;
let result = arr.map((ele)=>{
    return sum += ele;
});

console.log(result);

console.clear();

// filter 

let r = arr.filter((ele) =>{
    return ele.toString().endsWith("0");
})

console.log(r);

// every            

console.log(arr.every((ele) => {
    return typeof(ele) === "number";        // check sbhi elements number h k nahi
}));

// some 

console.log(arr.some((ele) => {
    return typeof(ele) === "string";        // check koi string present h k nahi
}))

// indexof              // gives index value of any element.
                        // gives -1 if element is not present.
                        // it will check from starting position

console.log(arr.indexOf(310));

// lastIndexof 

console.log(arr.lastIndexOf("str"));    // same work but it will check from end of the array.

// find 

console.log(arr.find((ele) => ele > 200));

// reduce           // reduce work on two parameter one is previous value and another one is current value. 

console.log(arr.reduce((previous, current) => {
    return previous + current;
},0));                  // here zero is previous value at iteration 1.

// console.log(arr.sort((a,b) => a - b));
console.log(arr.sort());

console.log(arr.findIndex((ele)  => ele > 210));
