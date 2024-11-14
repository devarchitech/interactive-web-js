// allows you to run a block of code multiple times and also enables you to avoid repition of code blocks in multiple places.

console.clear();

let counter = 0;

fun2();
fun2('Hello');

//create function as declaration
function fun2(val) {
    counter++;
    const output = `<div>${val} value is ${counter}</div>`;
    document.write(output);
    console.log('function declaration');
}

// create function as expression
let fun1 = function (val) {
    console.log('function expression')
}

// execute function
fun1(); 
//assign function without invoking
document.onclick = fun1;

fun1 = 'reassigned';
console.log(fun1);

// Anonymous function
document.onclick = function (val) {
    console.log('Anonymous function')
}

//Arrow function
document.onclick = (val) => {
    console.log('Arrow function')
}

//difference betweem function expression and declaration is that the function declaration can be called before defining the function.

let globalScope = 10;

//10, 20, 30 are default values
function fun3(n1=10, n2=20, n3=30) {
    const localScope = 90; //scope limited to this function
    total = localScope + globalScope + n1 + n2 + n3;
    return total;
}

let val = fun3(undefined, null, 'hello');

console.log(val);
document.write(val);
