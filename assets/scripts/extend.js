/*
To extend the built-in String object in JavaScript by adding custom methods, you can modify the String.prototype. This allows you to add new methods that will be available to all instances of String in your environment.

Here’s a basic example of how to add a custom method to the String object:

Example 1: Extending the String Prototype
Let’s say we want to add a reverse() method to all strings, which reverses the characters of the string:

 */

// Add a reverse method to String prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  };
  
  // Usage
  const str = "hello";
  console.log(str.reverse()); // "olleh"
  