// do-while loop

let i = 0;
do{
    console.log(i);
    i++;
}while(i < 5);


//  while-loop

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}


// for loop

for(let i = 0; i < 5; i++){
    console.log(i);
}

// for each loop
let a = [1, 2, 3, 4, 5];
for(let i in a) {       // The value of this i is start from zero and goes last element of the array.
    if (a[i] % 2 === 0){
        console.log(a[i]);
    }
}

console.log("--------------------------");

// another method of for each loop

var sum=0;

var arr = [10,15,20,30];  

arr.forEach(function myFunction(element){sum= sum+element;});       //that is javascript function is called citizen first functions.
console.log(sum);