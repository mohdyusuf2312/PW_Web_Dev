const numbers = [1, 3, 4, 6, 7, 9, 10, 12, 15];

function result(arr){
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(num % 3 !== 0){
            continue;
        }
        if(num % 2 === 0){
            continue;
        }
        console.log(num);
    }
}

result(numbers);