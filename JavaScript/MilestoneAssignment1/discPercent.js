const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
};

// Example usage
const originalPrice = 500;
const discountedPrice = 400;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`The discount percentage is ${discountPercentage}%`);
