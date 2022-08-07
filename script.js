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
            operator = e.target.id;
        }  else if( e.target.className.includes('operator') && secondValue !== '' && operator !== '') {
                output.innerText = operate(operator, display, secondValue);
                solution = output.innerText;
                history.innerText = `${display} ${operator} ${secondValue} =`
                operator = e.target.id;
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
// document.addEventListener('keydown', (e) => {
//    console.log(e)
// })

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
                console.log(operator)
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
                    console.log(output.inn)
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
                console.log(output.innerText)
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
        console.log(e.key, secondValue, display);

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
 