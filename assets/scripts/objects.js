/*
objects allow us to add multiple values to one container that we can set to a variable.
 */
const output = document.querySelector('div');
const input = document.querySelector('input');
const btn = document.querySelector('button');

// object - list of name value pairs
const obj1 = {
    first:'Javascript',
    second: 100,
    third : true,
    fourth : null,
    'fifth value':[1,2, 3],
    'sixth':[1,2, 3]
}; 

val = obj1;
val = obj1['fifth value'];
val = obj1.third;
obj1.fourth = 'not null';
val = obj1.fourth;
val = obj1.sixth[1];

console.log(val); //['one', 100, false, null, [1,2, 3]]
document.write(val); // one,100,false,,1,2,3 - null is not printed

const myobj = {
    first : 'Java',
    last : 'script',
    ele : output, // assign object
    id : 0,
    fullName : function (val) { //using anonymous function
        return `${this.first} ${this.last} ${val}`
    },
    zName(val){ //this is also valid
        return `${this.first} ${this.last} ${val}`
    },
    add(first, last){ //takes input
        this.first = first;
        this.last = last;
        return `${this.first} ${this.last}`
    }

}

btn.onclick = btnClicked;

function btnClicked () {
    output.innerHTML = `<div>${myobj.add('fname', 'ztest')}</div>${myobj.last}`;
    console.log(myobj)
    console.clear();
    const arr1 = Object.entries(myobj);
    console.log(arr1);
    const arr2 = Object.keys(myobj);
    console.log(arr2);
    const arr3 = Object.values(myobj)
    console.log(arr3);
    
    //to check if key is present
    const key = input.value;
    console.log(myobj[key] !== undefined); //true or false
    // another approach
    console.log(key in myobj) // true or false

    for(const prop in myobj){
        console.log(`${prop} : ${myobj[prop]} : ${typeof(myobj[prop])}`)
    }



}