// display DOM elements in console

/*
Form Elements
Form elements are specific HTML tags used to create interactive forms that allow users to input data. They are commonly found within <form> tags, but can exist outside of forms as well.

Other (Non-Form) Elements
Other HTML elements are used for general page structure and content presentation, rather than for user input and form submission. These include elements used for defining sections of the page, images, headings, paragraphs, links, and so on.

*/

console.clear();
const ele = document.body.children;
for (const key in ele){
    console.log(`${key} : ${ele[key]}`)
}
//elements();
function elements() {

    console.clear();
    console.dir(document);

    //html element collection as array of objects in console log
    const head = document.head.children;
    console.clear();
    console.dir(head)

    const ele = document.body.children;
    console.clear();
    console.log(typeof (ele)) //object
    console.dir(ele);

}
//display document objects on browser
//display();
function display() {
    const ele = document.body.children;
    eleList = '<ol>';
    for (let i = 0; i < ele.length; i++) {
        eleList += `<li>${ele[i].innerHTML}</li>`;
    }
    eleList += '</ol>';

    document.body.children[0].innerHTML = eleList; //html parsed by Browser
    document.body.children[2].textContent = eleList; //html as plain text
}

// textContent || innerHTML || innerText || outerHTML
/*
1. textContent => Represents the raw "text" content of an element without parsing the html, including all text nodes and ignoring any HTML tags within the element.

2. innerHTML => Represents the HTML content inside an element, including any HTML tags.It retrieves or sets the HTML markup contained within an element, including nested tags.

3. innerText => Represents the "rendered" text content of an element, taking CSS styles (like display: none) into account. It doesn't include hidden text or HTML tags.

4. outerHTML => Represents the HTML of the element itself, including the element's opening and closing tags.It retrieves or sets the entire HTML content of the element, including the element's own markup.

5. value => Represents the current value of form elements like <input>, <textarea>, and <select>.It retrieves or sets the value of form controls (e.g., input fields or dropdown menus).

*/


//display element attributes
//attributeList();
function attributeList() {
    const attr = document.body.children[1].children[0].attributes;
    console.log(attr);
}

//display element properties
//propertyList();
function propertyList() {

    const ele = document.body.children[1].children[0];
    for (const prop in ele) {
        //all properties
        //console.log(prop + " -- " + typeof(ele[prop]));

        //list only events
        if (typeof (ele[prop]) === 'object') {
            //console.log(prop + " -- " + typeof(ele[prop]));
        }

        //list only methods
        if (typeof (ele[prop]) === 'function') {
            //console.log(prop + " -- " + typeof(ele[prop]));
        }

        //list only properties
        let proplist = [];

        if (typeof (ele[prop]) !== 'function' && typeof (ele[prop]) !== 'object') {
            proplist.push(prop)
        }
        proplist.sort();
        console.log(proplist)
    }

}

//find and modify specific elements in DOM

//select the first matching tag
//<div id="one" class="red">Hello world</div>

let div = document.querySelector('div');
div = document.querySelector('#one');
div = document.querySelector('.red')
console.dir(div);
div.textContent = 'Javascript'

//select all matching tags and return array
const divs = document.querySelectorAll('div');
console.dir(divs);
divs[0].textContent = 'Back to Hello World'
divs[1].style.width='200px';
divs[1].style.border ='1px solid black'
//assign anonymous function 
divs[1].onclick = function() {
    console.log('clicked');
}

//or can assign a function without invoking meaning no ()
divs[1].onclick = clicker; // not clicker()
function clicker() {
    console.log('clicked');
}

//form elements
let txt = document.querySelector('#txt');
//let txt = document.querySelector('input[type=text]');
txt.value = 'click me';
txt.setAttribute('type', 'number');








