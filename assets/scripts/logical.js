// Logical Conditions in JavaScript

// 1. **Basic If-Else Condition**
// An if statement is used to execute code based on a condition.

let number = 10;
if (!isNaN(number) && number != NaN && number  > 0) {
    console.log(number + " is positive.");  // This will print because 10 is greater than 0.
} else {
    console.log(number + " is negative.");
}

// 2. **If-Else If-Else**
// We can use `else if` to check multiple conditions sequentially.

let age = 18;
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager.");  // This will print because age is between 13 and 18.
} else {
    console.log("You are an adult.");
}

// 3. **Switch Statement**
// The `switch` statement allows you to compare one variable against multiple possible values.

let day = 3; // Example: 0 = Sunday, 1 = Monday, ..., 6 = Saturday
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");  // This will print because day is 3.
        break;
    default:
        console.log("Invalid day");
}

// 4. **Logical AND (&&) and OR (||) Operators**
// These operators are used to combine multiple conditions.

// 5. **Logical NOT (!) Operator**
// The NOT operator negates a condition, making it true if the condition is false, and vice versa.


// 6. **Ternary Operator (Shortened if-else)**
// The ternary operator allows you to write a simple if-else condition in a single line.

let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cold";  // If temperature is greater than 25, it's "Hot", otherwise "Cold".
console.log("The weather is " + weather + ".");  // Output: The weather is Hot.


