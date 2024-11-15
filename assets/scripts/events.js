
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector(".child");

window.onload = init;
document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('document loaded')
}

//capturing and event bubbling
grandparent.addEventListener('click', (e)=> {
    console.log('grandparent capture')
}, {capture : true})

grandparent.addEventListener('click', (e)=> {
    console.log('grandparent bubble')
})

parent.addEventListener('click', (e)=> {
    //e.stopPropagation();
    console.log('parent once')
}, {once : true})

parent.removeEventListener('click', func)

parent.addEventListener('click', (e)=> {
    console.log('parent bubble')
})

child.addEventListener('click', (e)=> {
    console.log('child capture')
}, {capture : true})

child.addEventListener('click', (e)=> {
    console.log('child bubble')
})

//event delegate
document.addEventListener('click', e => {
    if(e.target.matches('div')) console.log('hi');
})


function addGlobalEvenntListerner(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}