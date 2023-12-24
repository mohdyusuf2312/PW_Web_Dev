let cart = ["Apple", "Banana", "Apple", "Apple", "Banana", "Grapes", "Guava"];

function removeDuplicate(cart){
    let uniqueCart = [...new Set(cart)];
    return uniqueCart;
}

let uniqueCart = removeDuplicate(cart);
console.log(uniqueCart);