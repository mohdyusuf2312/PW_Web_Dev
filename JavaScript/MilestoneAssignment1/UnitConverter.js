function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Example usage
let celsiusTemp = 25; // Temperature in Celsius
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);
