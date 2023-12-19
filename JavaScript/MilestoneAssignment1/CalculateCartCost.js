const cart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 200, quantity: 1 },
    { unitPrice: 50, quantity: 4 }
];

const totalCost = (cart) => {
    return cart.reduce((total, item) => {
        return total + (item.unitPrice * item.quantity);
    }, 0);
};

console.log(`The total cost of items in the cart is Rs. ${totalCost(cart)}`);