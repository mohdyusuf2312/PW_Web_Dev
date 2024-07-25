let arr = [1, 5, 45, 25, 36, 69, 52, 4];

const sum = arr =>{
    let result = 0;
    for(ele of arr){
        result += ele;
    }
    return result;
}

console.log(sum(arr));



function sum (arr){
    let result = 0;
    for(ele of arr){
        result += ele;
    }
    return result;
}

console.log(sum(arr));