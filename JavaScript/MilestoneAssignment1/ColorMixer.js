function mixColors(color1, color2) {
    let result;

    switch (true) {
        case (color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'):
            result = 'purple';
            break;
        case (color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'):
            result = 'orange';
            break;
        case (color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'):
            result = 'green';
            break;
        default:
            result = 'Invalid color combination';
    }

    console.log(result);
}

// Test cases
mixColors('red', 'blue');    // Outputs: purple
mixColors('red', 'yellow');  // Outputs: orange
mixColors('blue', 'yellow'); // Outputs: green
mixColors('blue', 'red');    // Outputs: purple
mixColors('yellow', 'red');  // Outputs: orange
mixColors('yellow', 'blue'); // Outputs: green
mixColors('red', 'green');   // Outputs: Invalid color combination
mixColors('pink', 'blue');   // Outputs: Invalid color combination
