// variables 

const buttons = Array.from(document.querySelectorAll('button'));
const output = document.querySelector('.display');
// Basic math operators

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// operate function 
function operate(operator,a , b) {
    if(operator === 'add') {
        return   add(a, b); 
    } else if (operator === 'subtract') {
        return  subtract(a, b);
    } else if(operator === 'divide') {
        return divide(a, b);
    } else if(operator === 'multiply') {
        return multiply(a, b); 
    } 
}

// display

function population() {
    buttons.map(button => button.addEventListener('click', (e) => {
        output.textContent += e.target.textContent  ;
    }))
}
population()