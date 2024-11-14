// loops-explanation.js

console.log("=== Loops in JavaScript ===");

// 1. **for loop**
console.log("\n=== for loop ===");
console.log("The 'for' loop is used when the number of iterations is known beforehand.");
console.log("Syntax: for (initialization; condition; increment/decrement) { }");

// Example: Iterate over an array using 'for' loop
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Example: Iterating over an array with 'for' loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Prints each fruit
}

// 2. **while loop**
console.log("\n=== while loop ===");
console.log("The 'while' loop is used when you want to repeat a block of code an indefinite number of times as long as the condition is true.");

// Example: Print numbers from 1 to 5 using 'while' loop
let count = 1;
console.log("Example: Printing numbers from 1 to 5 using 'while' loop:");
while (count <= 5) {
    console.log(count);
    count++; // Increment count
}

// 3. **do...while loop**
console.log("\n=== do...while loop ===");
console.log("The 'do...while' loop is similar to the 'while' loop, but it guarantees at least one iteration, even if the condition is false at the start.");

// Example: Print numbers from 1 to 5 using 'do...while' loop
let num = 1;
console.log("Example: Printing numbers from 1 to 5 using 'do...while' loop:");
do {
    console.log(num);
    num++; // Increment num
} while (num <= 5);

// 4. **for...in loop**
console.log("\n=== for...in loop ===");
console.log("The 'for...in' loop is used to iterate over the properties of an object or indices of an array.");

// Example: Iterate over the keys of an object using 'for...in' loop
const person = { name: "Alice", age: 25, job: "Engineer" };
console.log("Example: Iterating over an object with 'for...in' loop:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 5. **for...of loop**
console.log("\n=== for...of loop ===");
console.log("The 'for...of' loop is used to iterate over the values of an iterable object (like an array or string).");

// Example: Iterate over the elements of an array using 'for...of' loop
console.log("Example: Iterating over an array with 'for...of' loop:");
for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit
}

console.clear();

//loops Interacting with DOM 
const output = document.querySelector('div');
const input = document.querySelector('input');
const btn = document.querySelector('button');
input.setAttribute('type','number');
input.setAttribute('max','20');
input.setAttribute('min', '0')
input.value = 5

btn.onclick = btnClicked;

function btnClicked () {

    output.innerHTML = '';
    for(let i=1;i<=input.value;i++) {
        output.innerHTML +=`<div>${i}</div>`;
    }
    
}