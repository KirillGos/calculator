// clear
const clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
        output.innerText = output.innerText.slice(0, -1);
      if(solution === '' && operator === '' && secondValue === '') {
        display =  display.slice(0, -1);
      }  else if( operator !== '' && secondValue !== '') {
        secondValue = secondValue.slice(0, -1)
      } if(solution !== '') {
        solution = output.innerText;
      }
});
// variables 

const buttons = Array.from(document.querySelectorAll('button'));
const output = document.querySelector('.display');
// Basic math operators

const add = (a, b) =>  Number(a) + Number(b);
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
        if(e.target.className.includes('operator') && operator === '') {
            operator += e.target.innerText;
            
        }  else if( e.target.className.includes('operator') && secondValue !== '' && operator !== '') {
                output.innerText = operate(operator, display, secondValue);
                solution = output.innerText;
                history.innerText = `${display} ${operator} ${secondValue} =`
                operator = e.target.innerText;
                secondValue = '';
        } 
       
    }));

// display
let display = '';
function population() {
    buttons.map(button => button.addEventListener('click', (e) => {
        if(e.target.className.includes('number') && solution === '' && operator === '') {
            output.textContent += e.target.innerText;
           display = output.innerText;
          
         }
        else if(solution !== '' && e.target.className.includes('number')) {
            output.textContent += e.target.innerText;
            display = solution;
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

const history = document.querySelector('.history');
const equal = document.querySelector('.equal');
let solution = '';
equal.addEventListener('click', (e) => {
    if(operator !== '' && secondValue !== '') {
        output.innerText = operate(operator, display, secondValue);
        solution = output.innerText;
        if(secondValue !== '') {
            history.innerText = `${display} ${operator} ${secondValue} =`
        }
        
    } 
    operator = '';
    secondValue = '';
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    output.innerText = '';
    display = '';
    secondValue = '';
    operator = '';
    solution = '';
    history.innerText = '';
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if(!output.innerText.includes('.')) {
        output.innerText += '.'
       if(solution === '' && operator === '') {
         display = output.innerText;
       } else if(operator !== '' && display !== '') {
        secondValue = output.innerText
       }
    }
})