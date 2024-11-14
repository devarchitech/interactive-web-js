// math-random-explanation.js

console.log("=== Math.random() Explanation ===");

// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random() generates a number between 0 (inclusive) and 1 (exclusive):");
console.log("Example 1:", Math.random()); // Example: Output might be a value like 0.783, 0.512, etc.

// Generating a random number in a specific range (min, max)
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("\n=== Random number between 10 and 20 ===");
console.log("Random number between 10 and 20:", getRandomInRange(10, 20));

// To generate a random integer between a specific range (inclusive), we can use Math.floor() to round down
function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("\n=== Random integer between 1 and 100 ===");
console.log("Random integer between 1 and 100:", getRandomIntInRange(1, 100));

// Simulating a random dice roll (1 to 6)
console.log("\n=== Simulating a dice roll ===");
console.log("Random dice roll (1 to 6):", getRandomIntInRange(1, 6));

// Generating random boolean values (true or false)
console.log("\n=== Generating random boolean ===");
const randomBool = Math.random() < 0.5; // 50% chance of being true or false
console.log("Random boolean (true or false):", randomBool);

// Generating random values for array selection (simulating a random item selection)
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const randomFruitIndex = getRandomIntInRange(0, fruits.length - 1);
console.log("\n=== Random selection from an array ===");
console.log("Random fruit from array:", fruits[randomFruitIndex]);

// Generating random numbers for other use cases
console.log("\n=== Random number for other use cases ===");

// Random number between 0 and 1 with 2 decimal points
const randomDecimal = Math.random().toFixed(2);
console.log("Random decimal between 0 and 1 (2 decimal points):", randomDecimal);

// Random float between a given range with a specified precision
function getRandomFloatInRange(min, max, precision = 2) {
    const randomNumber = Math.random() * (max - min) + min;
    return randomNumber.toFixed(precision); // rounding to specified decimal precision
}

console.log("\n=== Random float between 1.5 and 5.5 with 3 decimal points ===");
console.log("Random float between 1.5 and 5.5:", getRandomFloatInRange(1.5, 5.5, 3));