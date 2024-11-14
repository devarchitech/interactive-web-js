// operators and examples

console.log("=== Arithmetic Operators ===");
console.log("Addition ( + ): 3 + 2 =", 3 + 2);              // 5
console.log("Subtraction ( - ): 5 - 3 =", 5 - 3);          // 2
console.log("Multiplication ( * ): 4 * 3 =", 4 * 3);      // 12
console.log("Division ( / ): 10 / 2 =", 10 / 2);          // 5
console.log("Modulus ( % ): 10 % 3 =", 10 % 3);            // 1
console.log("Exponentiation ( ** ): 2 ** 3 =", 2 ** 3);    // 8

console.log("\n=== Assignment Operators ===");
let x = 10;
console.log("Assignment ( = ): x = 10 =>", x);            // 10
x += 5;
console.log("Add and Assign ( += ): x += 5 =>", x);       // 15
x -= 3;
console.log("Subtract and Assign ( -= ): x -= 3 =>", x);  // 12
x *= 2;
console.log("Multiply and Assign ( *= ): x *= 2 =>", x);  // 24
x /= 4;
console.log("Divide and Assign ( /= ): x /= 4 =>", x);    // 6
x %= 4;
console.log("Modulus and Assign ( %= ): x %= 4 =>", x);   // 2

console.log("\n=== Comparison Operators ===");
console.log("Equal to ( == ): 5 == 5 =", 5 == 5);           // true
console.log("Not equal to ( != ): 5 != 3 =", 5 != 3);       // true
console.log("Strictly equal ( === ): 5 === '5' =", 5 === '5'); // false
console.log("Strictly not equal ( !== ): 5 !== '5' =", 5 !== '5'); // true
console.log("Greater than ( > ): 5 > 3 =", 5 > 3);         // true
console.log("Greater than or equal to ( >= ): 5 >= 5 =", 5 >= 5); // true
console.log("Less than ( < ): 3 < 5 =", 3 < 5);            // true
console.log("Less than or equal to ( <= ): 3 <= 5 =", 3 <= 5); // true

console.log("\n=== Logical Operators ===");
console.log("Logical AND ( && ): true && false =", true && false); // false
console.log("Logical OR ( || ): true || false =", true || false);  // true
console.log("Logical NOT ( ! ): !true =", !true);                   // false

console.log("\n=== Unary Operators ===");
let a = 5;
console.log("Unary plus ( + ): +a =", +a);             // 5
console.log("Unary negation ( - ): -a =", -a);         // -5
console.log("Increment ( ++ ): a++ =>", a++, " => a =", a);  // 5 then a = 6
console.log("Decrement ( -- ): a-- =>", a--, " => a =", a);  // 6 then a = 5

console.log("\n=== Conditional (Ternary) Operator ===");
let age = 18;
console.log("Ternary Operator: age >= 18 ? 'Adult' : 'Minor' =", age >= 18 ? 'Adult' : 'Minor');  // 'Adult'

console.log("\n=== Bitwise Operators ===");
console.log("Bitwise AND ( & ): 5 & 3 =", 5 & 3);        // 1
console.log("Bitwise OR ( | ): 5 | 3 =", 5 | 3);         // 7
console.log("Bitwise XOR ( ^ ): 5 ^ 3 =", 5 ^ 3);        // 6
console.log("Bitwise NOT ( ~ ): ~5 =", ~5);              // -6
console.log("Left Shift ( << ): 5 << 1 =", 5 << 1);      // 10
console.log("Right Shift ( >> ): 5 >> 1 =", 5 >> 1);     // 2
console.log("Zero Fill Right Shift ( >>> ): 5 >>> 1 =", 5 >>> 1); // 2

console.log("\n=== Spread and Rest Operators ===");
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log("Spread Operator: [...arr, 4, 5] =", newArr);  // [1, 2, 3, 4, 5]
const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
console.log("Rest Operator: sum(1, 2, 3, 4) =", sum(1, 2, 3, 4)); // 10

console.log("\n=== typeof and instanceof Operators ===");
console.log("typeof 'hello' =", typeof 'hello');     // 'string'
console.log("typeof 5 =", typeof 5);                 // 'number'
console.log("typeof true =", typeof true);           // 'boolean'
console.log("typeof undefined =", typeof undefined); // 'undefined'
console.log("typeof null =", typeof null);           // 'object'
console.log("5 instanceof Number =", 5 instanceof Number); // false

console.log("\n=== Delete Operator ===");
const person = { name: 'Alice', age: 25 };
delete person.age;
console.log("Delete age property:", person);  // { name: 'Alice' }

console.log("\n=== In Operator ===");
console.log("'name' in person =", 'name' in person);   // true
console.log("'age' in person =", 'age' in person);     // false

console.log("\n=== void Operator ===");
console.log("void 0 =", void 0);  // undefined

console.log("\n=== Comma Operator ===");
let i = (2, 3, 4);  // Executes each expression, returns the last one
console.log("Comma Operator result:", i); // 4
