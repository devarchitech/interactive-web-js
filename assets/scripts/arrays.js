// arrays and objects allows us to assign multiple values to the same variable

//here const can be used and still values with in the array or object can be modified as they represent memory location not actual values.

//array - list of indexed values
const arr1 = ['one', 100, false, null, [1,2, 3], {id: 100}]; 
arr1[3] = 'not null';

let arr2 = arr1 // any update to one arry will reflect in other array as well. 
let val = arr1;

console.log(val); //['one', 100, false, null, [1,2, 3]]
//document.write(val); // one,100,false,,1,2,3 - null is not printed

/***************************** */

const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence';
const arr1 = ['One'];
const tempArr = ['onex','twox','threex'];
const arr = arr1.concat(tempArr,tempArr);


function btnClicked(){
    const val =  myInput.value;
    let temp = arr.push(val,'LAST'); // add to array return the array length
    console.log(temp);
    temp = arr.pop(); //remove last
    console.log(temp);
    temp = arr.shift(); //remove first item
    console.log(temp);
    temp = arr.unshift('First'); //add to the front of array array length returned
    console.log(temp);
    console.log(arr.length);
    arr[arr.length - 1] = 'LAST';
    //delete arr[0];
    //console.log(arr);
    arr.push('one1','two2','three3');
    //temp = arr.splice(1);  return array with all items after the index of 1
    //temp = arr.splice(1,3);
    temp = arr.splice(1,3,'Add1','Add2','Add3');
    console.log(temp); 
    temp = arr.splice(3,0,'New1','New2','New3');
    console.log(temp); 
    temp = arr.slice(); //duplicate array as new array
    temp[0] = 'TEST';
    temp = arr.slice(5); // return array items from index 5 
    temp = arr.slice(1,4); // return portion of array using slice

    console.clear();
    console.log(temp); 
    console.log(arr);
    const myStr = arr.toString();
    const myStr1 = arr.join(' - ');

    output.innerHTML = `<div>${myStr}</div>`;
    console.log(arr);
    console.log(myStr);
    console.log(myStr1);

    
}

const eles = document.querySelectorAll('div div');
console.log(eles);
eles.forEach((ele)=>{
    console.log(ele);
    ele.val = 0;
    ele.onclick = (e)=>{
        console.clear();
        console.log(ele);
        console.log(e.target);
        ele.val++;
        ele.innerText = `${ele.val} was clicked`;
        if(ele.style.color == 'red'){
            ele.style.color = 'black';
        }else{
            ele.style.color = 'red';
        }
        
    }
})


function btnClicked(){
    arr.push(myInput.value);
    console.log(arr.length);
    for(let i=0;i<arr.length;i++){
        console.log(`${i} ${arr[i]}`);
    }
    let html = '';
    arr.forEach((item,index,arr1)=>{
        html += `<div>${index+1}. ${item}</div>`;
        console.log(item);
        console.log(index);
        console.log(arr1);
        //console.clear();
        //arr1[0] = 'TEST';
    })
    output.innerHTML = html;
}

/**********************************/
// 1. Creating an Array
let fruits = ['apple', 'banana', 'cherry'];
console.log('Initial array:', fruits);

// 2. Accessing Elements
let firstFruit = fruits[0];  // 'apple'
let secondFruit = fruits[1]; // 'banana'
console.log('First fruit:', firstFruit);  // Output: 'apple'
console.log('Second fruit:', secondFruit); // Output: 'banana'

// 3. Adding Elements to the Array
// Add an element at the end using push()
fruits.push('orange');
console.log('Array after push:', fruits);  // ['apple', 'banana', 'cherry', 'orange']

// Add an element at the beginning using unshift()
fruits.unshift('grape');
console.log('Array after unshift:', fruits);  // ['grape', 'apple', 'banana', 'cherry', 'orange']

// 4. Removing Elements from the Array
// Remove the last element using pop()
let lastFruit = fruits.pop();
console.log('Removed last fruit:', lastFruit);  // 'orange'
console.log('Array after pop:', fruits);  // ['grape', 'apple', 'banana', 'cherry']

// Remove the first element using shift()
let firstFruitRemoved = fruits.shift();
console.log('Removed first fruit:', firstFruitRemoved);  // 'grape'
console.log('Array after shift:', fruits);  // ['apple', 'banana', 'cherry']

// 5. Finding Elements
// Find the index of an element using indexOf()
let index = fruits.indexOf('banana');
console.log('Index of banana:', index);  // 1

// Find an element using find() with a condition
let foundFruit = fruits.find(fruit => fruit.startsWith('c'));
console.log('First fruit starting with "c":', foundFruit);  // 'cherry'

// Find the index of an element using findIndex()
let foundIndex = fruits.findIndex(fruit => fruit === 'banana');
console.log('Index of banana using findIndex():', foundIndex);  // 1

// 6. Iterating Over an Array
// Using forEach()
fruits.forEach(fruit => {
  console.log('Fruit:', fruit);
});

// 7. Mapping Over an Array
// Use map() to create a new array
let fruitsUpperCase = fruits.map(fruit => fruit.toUpperCase());
console.log('Fruits in uppercase:', fruitsUpperCase);  // ['APPLE', 'BANANA', 'CHERRY']

// 8. Filtering an Array
// Use filter() to get fruits that start with the letter 'a'
let filteredFruits = fruits.filter(fruit => fruit.startsWith('a'));
console.log('Fruits starting with "a":', filteredFruits);  // ['apple']

// 9. Sorting an Array
// Sort the array alphabetically
let sortedFruits = fruits.slice().sort();  // Using slice() to avoid mutating the original array
console.log('Sorted fruits:', sortedFruits);  // ['apple', 'banana', 'cherry']

// 10. Reversing an Array
// Reverse the array
let reversedFruits = fruits.slice().reverse();
console.log('Reversed fruits:', reversedFruits);  // ['cherry', 'banana', 'apple']

// 11. Combining Arrays
// Use concat() to combine two arrays
let moreFruits = ['kiwi', 'pear'];
let allFruits = fruits.concat(moreFruits);
console.log('Combined fruits:', allFruits);  // ['apple', 'banana', 'cherry', 'kiwi', 'pear']

// 12. Slicing an Array
// Use slice() to get a portion of the array
let slicedFruits = fruits.slice(1, 3);  // Start at index 1, end at index 3 (not inclusive)
console.log('Sliced fruits:', slicedFruits);  // ['banana', 'cherry']

// 13. Splicing an Array
// Use splice() to remove and/or add elements at a specific index
fruits.splice(1, 1, 'mango', 'peach');  // Remove 1 element at index 1, and add 'mango' and 'peach'
console.log('Array after splice:', fruits);  // ['apple', 'mango', 'peach', 'cherry']

// 14. Checking Array Contents
// Check if a certain element exists in the array
let hasBanana = fruits.includes('banana');
console.log('Does the array include "banana"?', hasBanana);  // false

// 15. Flattening an Array
// Use flat() to flatten a nested array
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = nestedArray.flat();
console.log('Flattened array:', flattenedArray);  // [1, 2, 3, 4, 5, 6]

