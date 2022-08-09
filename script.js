// this is a clear button when user clicks on it one digit will disappear
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


// operate function that takes the current operator and preforms the action with it
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
// getting the operator. first we loop through our buttons and we add event listeners to them 
// than if the target has class of operator and the operator doesn't still exist we're gonna 
// set the operator to the targets id.
// else if target has the class of operator and second value and operator exist
// output will be the result of the calculations. 
// solution's value will be the outcome.innerText
// and than I display the history
// than we assign the operator to the current one which has been clicked and we reset the second value because we've already used it in our
// calculations and we don't need it anymore
let operator = '';
    buttons.map(button => button.addEventListener('click', (e) => {
        if(e.target.className.includes('operator') && operator === '') {
            operator = e.target.id;
        }  else if( e.target.className.includes('operator') && secondValue !== '' && operator !== '') {
                output.innerText = operate(operator, display, secondValue); //preform the previous operator
                solution = output.innerText;
                history.innerText = `${display} ${operator} ${secondValue} =`
                operator = e.target.id; //set the operator to the current one which has been clicked
                secondValue = '';
        } 
       
    }));

// display(the first value). first we loop through the buttons and we add event listeners to them 
// than we check does this button has class name of number, is the solution and operator variable equals to an empty string 
// if all of that is true the output is gonna equal and plus to the numbers innerText and display will be output's inner text.

// else if solution isn't an empty string and the target has class name of number output will equal and plus to the target's innerText
// and display will equal to the solution variable
let display = '';
    buttons.map(button => button.addEventListener('click', (e) => {
        if(e.target.className.includes('number') && solution === '' && operator === '') {
            output.textContent += e.target.innerText;
           display = output.innerText;
         }
        else if(solution !== '' && e.target.className.includes('number')) {
            display = solution;
        }
    }));


// when an operator is clicked
// getting the second value. if the target's class name includes number and the operator isn't an empty string the secondValue will equal and plus 
// to the target's inner text and the output will be the secondValue;


    let secondValue = '';
    document.addEventListener('click', (e) => {
        if(e.target.className.includes('number') && operator !== '') {
               secondValue += e.target.innerText;
               output.innerText = secondValue;
            }
        });

// add event listener to the equal button. if the operator and the secondValue aren't an empty string output will be the outcome of the operate
// function and the solution will equal to the output's inner text. and then we display the history and reset the operator and the secondValue
const history = document.querySelector('.history');
const equal = document.querySelector('.equal');
let solution = '';
equal.addEventListener('click', (e) => {
    if(operator !== '' && secondValue !== '') {
        output.innerText = operate(operator, display, secondValue);
        solution = output.innerText;
        history.innerText = `${display} ${operator} ${secondValue} =`
        
    } 
    operator = '';
    secondValue = '';
})

// a reset button
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    output.innerText = '';
    display = '';
    secondValue = '';
    operator = '';
    solution = '';
    history.innerText = '';
});

// adds one dot only 
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
});



// keyboard support  
document.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace') {
        output.innerText = output.innerText.slice(0, -1);
            if(solution === '' && operator === '' && secondValue === '') {
                display =  display.slice(0, -1);
            }  else if( operator !== '' && secondValue !== '') {
                secondValue = secondValue.slice(0, -1)
            } if(solution !== '') {
                solution = output.innerText;
            }
    }
     
});


    document.addEventListener('keydown', (e) => {
            if(e.key == '*' || e.key == '/' || e.key == '-' || e.key == '+') {
                if( operator === '') {    
                if(e.key === '-') {
                    operator = '-';
                } else if (e.key === '/') {
                    operator = '÷'
                } else if (e.key === '*') {
                    operator = 'x';
                } else if (e.key === '+') {
                    operator = '+';
                }
            }  else if( secondValue !== '' && operator !== '') {
                    output.innerText = operate(operator, display, secondValue);
                    solution = output.innerText;
                    history.innerText = `${display} ${operator} ${secondValue} =`
                    if(e.key === '-') {
                        operator = '-';
                    } else if (e.key === '/') {
                        operator = '÷'
                    } else if (e.key === '*') {
                        operator = 'x';
                    } else if (e.key === '+') {
                        operator = '+';
                    }
                    secondValue = '';
            } 
      
        }
      
       
    });


    // output
  document.addEventListener('keydown', (e) => {
        if(e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' ||
        e.key === '7'|| e.key === '8' || e.key === '9' || e.key === '0') {
          if( solution === '' && operator === '') {
                output.innerText += e.key;
                display = output.innerText;
          }

         } else if(e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' ||
        e.key === '7'|| e.key === '8' || e.key === '9' || e.key === '0') {
                if(solution !== '') {
                    output.innerText += e.key;
                    display = solution;
                }
         }
    });

// second value
    document.addEventListener('keydown', (e) => {
        if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' ||
        e.key === '7'|| e.key === '8' || e.key === '9' || e.key === '0') {
             if( operator !== '' && display !== '') {
                 output.innerText = '';
               secondValue += e.key;
               output.innerText += secondValue;
            }
        }
    });
        

    // enter = equal
    document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
         if(operator !== '' && secondValue !== '') {
        output.innerText = operate(operator, display, secondValue);
        history.innerText = `${display} ${operator} ${secondValue} =`
          display = output.innerText;
    } 
    operator = '';
    secondValue = '';
    }
   
});
// add dot
document.addEventListener('keydown', (e) => {
    if(!output.innerText.includes('.') && e.key === '.') {
        output.innerText += '.'
       if(solution === '' && operator === '') {
         display = output.innerText;
       } else if(operator !== '' && display !== '') {
        secondValue = output.innerText
       }
    }
});
 
