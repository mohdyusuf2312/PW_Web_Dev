function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

// Test cases
calculator(5, 3, '+'); // Outputs: The result of 5 + 3 is: 8
calculator(10, 4, '-'); // Outputs: The result of 10 - 4 is: 6
calculator(6, 7, '*'); // Outputs: The result of 6 * 7 is: 42
calculator(8, 2, '/'); // Outputs: The result of 8 / 2 is: 4
calculator(5, 3, '%'); // Outputs: Invalid operator
