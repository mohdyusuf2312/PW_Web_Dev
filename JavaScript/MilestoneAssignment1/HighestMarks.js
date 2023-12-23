function findHighestMarks(marks) {
    // Assume the first student's marks are the highest initially
    let highestMarks = marks[0];

    // Iterate through the array to find the highest marks
    for (let i = 1; i < marks.length; i++) {
        // Use the ternary operator to update the highest marks if current marks are higher
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    // Display the highest marks to the console
    console.log(`The highest marks scored by a student is: ${highestMarks}`);
}

// Example usage
const marks = [85, 92, 78, 90, 88];
findHighestMarks(marks); // Outputs: The highest marks scored by a student is: 92
