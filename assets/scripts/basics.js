/*
Javascript is interpreted programming language which means
the code the run from top to botton and returns results 
immediately in the same order as presented. It is client 
side code that runs directly on the user's computer.
when the user views web page in abrowser, the code is 
downloaded, run and displayed by the browser.
*/

//single statement - output the result into browser page
document.writeln('Hello World 3<br/>');
//or block of statements
{
    //writeln adds additional space at the end
    document.writeln('Hello World 4<br/>');
    document.write('Hello World 5');
}

//console.log - output the result in the dev tools console.
{
    console.log('log a value');
    console.error('log an error');
    console.info('log some info');
    console.warn('log as warning');
    //console.clear();
}

/*
***window object is entire parent that is available within the browser
and document object is contained within the window object
*/

//global method alert belongs to window object.
//JS stops running until we hit OK
window.alert('this is alert');
const promptResponse = window.prompt('How are you?');
const confirmResponse = window.confirm('How is it so far?')

console.log('prompt response is ' + promptResponse);
console.log('confirm response is ' + confirmResponse)




