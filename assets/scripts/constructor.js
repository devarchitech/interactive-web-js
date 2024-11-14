const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence';

//construtor function used to create object 
function FullName(first='Java',last='Script'){
    //first = first || 'Javascript';
    this.firstName = first,
    this.lastName = last,
    this.full = `${first} ${last}`;
}


function btnClicked(){
    const person = new FullName(myInput.value,'Smith');
    console.log(person.full);
}