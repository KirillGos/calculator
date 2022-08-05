// Variables
//RESET
const reset = document.querySelector('.reset');
// output 
const output = document.querySelector('.output');
//operators
const addBtn = document.querySelector('.addBtn');
const subtractBtn = document.querySelector('.subtractBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const divideBtn = document.querySelector('.divideBtn');

//numbers
const numbers = document.querySelector('.numbers');
// basic math operators 
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
} 

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}


let display;
document.addEventListener('click', function(e) {
    if(e.target.className.includes('num')) {
        output.innerText += e.target.innerText; 
        display = output.innerText;
     }
});
let operation;
document.addEventListener('click', function(e) {
    if(e.target.parentElement.className == 'operators') {
        operation = e.target.className;
        console.log(operation)
        }
});
//reset button
reset.addEventListener('click', function(e) {
    output.innerText = '';
});

// addBtn.addEventListener('click', function() {
//     let first = display;
//    let second = output.innerText; 
//   output.innerText =  add(parseInt(first), parseInt(second));
// })


//operate function

