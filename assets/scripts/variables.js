// Case sensitive - camel case naming convention
//let - allows you reassign variable to a different value
let a = 'code archi tech';
let b = 10; 
let _x, $y, m_, n$; // can start with underscore or dollar sign
//a = b; // a = 10
console.log(a);

//scope to variables
{
    //if variable does not exists in current scope, it will look in the parent scope - 1 level up.
    const b = 1000;
    {
        console.log(b);
        console.log(a);
        var d = 'var does not have scope so same variable name cannot be declared as var in different scopes. it would be redeclared updating the value';
        let e = 'let is confined to scope';
    }

    console.log(d); // prints d value
    console.log(e); // e is not defined error
}

//const - allows you to assign the value one time.
const c = 'constant value';
//c = a;
console.log(c); // will throw error as assignment to constant variable

//strings can be defined in single quote, double quote or back ticks (called as template literals)
let mystr1 = 'Hello\'s "world"';
let mystr2 = "\"Hello\" 'world'";
let mystr3 = `'Hello'  s
"world"`

console.log(a + " " + b); // 10 10
console.log(a + b); //20
console.log(`${mystr1} ${mystr2} ${mystr3}`)