let arr = [1,2,3,4,1,3];
let set = new Set(arr);
// console.log(set);

// add 

console.log(set.add("Yusuf"));

// delete 

console.log(set.delete(3));         // If deletion is successful than it will return true otherwise return false.

// has 

console.log(set.has("Yusuf"));
console.log(set);

// size 
console.log(set.size);

// for each 
let arr1 = [1,2,3,6,3,"Yusuf"]
let set1 = new Set([...arr]);
let count = 0;
set1.forEach(el => {
  if(typeof el === "number"){
    count++
  }
});
console.log(count);

// clear 
set.clear();
console.log(set.clear());

let setodd = new Set([1,3,5,7,9,10]);
let seteven = new Set([2,4,6,8]);
let square = new Set([1,4,9,16,25,36]);

const diffenrence = new Set([...setodd].filter(el => !square.has(el)
));

const intersection = new Set([...setodd].filter(el => square.has(el)
));

console.log(diffenrence);
console.log(intersection);