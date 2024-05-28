function rest(...ar) {
    let arr = ar.map(ele => ele);
    console.log(arr);
}
rest(1,2,3,4,5,6);

const arr = ['p','w','s','k','i','l','l','s'];
console.log(...arr);