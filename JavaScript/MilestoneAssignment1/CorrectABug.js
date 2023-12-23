function doubleCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2; // Double the quantity of each item
    }
    return cart; // Return the updated cart array
}

// Example usage
let cart = [2, 5, 3, 8]; // Initial quantities
console.log("Original cart quantities:", cart);

cart = doubleCartQuantities(cart); // Double the quantities
console.log("Updated cart quantities:", cart);
