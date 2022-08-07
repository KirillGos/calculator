// variables 

const buttons = Array.from(document.querySelectorAll('button'));
const output = document.querySelector('.display');
// Basic math operators

const add = (a, b) =>  parseInt(a) + parseInt(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// operate function 
function operate(operator,a , b) {
    if(operator === '+') {
        return   add(a, b); 
    } else if (operator === '-') {
        return  subtract(a, b);
    } else if(operator === '÷') {
        return divide(a, b);
    } else if(operator === 'x') {
        return multiply(a, b); 
    } 
}

    let operator = '';
    buttons.map(button => button.addEventListener('click', (e) => {
        if(e.target.className.includes('operator')) {
            operator += e.target.innerText;
            console.log(operator)
        } 
    }));

// display
let display = '';
function population() {
    buttons.map(button => button.addEventListener('click', (e) => {
        if(e.target.className.includes('number') && solution === '' && operator === '') {
            output.textContent += e.target.innerText;
           display = output.innerText;
          
        } else if(solution !== '') {
            display = solution
        }
    }))
}
population()

// when an operator is clicked



    let secondValue = '';
    document.addEventListener('click', (e) => {
        if(e.target.className.includes('number') && operator !== '') {
               secondValue += e.target.innerText;
               output.innerText = secondValue;
            }
        });


const equal = document.querySelector('.equal');
let solution = '';
equal.addEventListener('click', (e) => {
    if(operator !== '') {
        output.innerText = operate(operator, display, secondValue);
        solution = output.innerText;
    }
    operator = '';
    // display = '';
    secondValue = '';
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    output.innerText = '';
    display = '';
    secondValue = '';
    operator = '';
    solution = '';
});


