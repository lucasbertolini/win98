createWindow('Calculator', 'calculator');
createDiv('window-body', document.querySelector('#window'));
// create main tag for calculator
let main = document.createElement('main');
main.setAttribute('class', 'container');
document.querySelector('#window-body').appendChild(main);
createDiv('calculadora_principal', document.querySelector('.container'));
//create calculator input elements 
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('readonly', '');
input.setAttribute('class', 'calculadora__principal--mostrador')
input.setAttribute('id', 'calculadora__principal--mostrador');
document.querySelector('#calculadora__principal').appendChild(input);

createDiv('calculatorButton', document.querySelector('#calculadora__principal'));
createDiv('clearButton', document.querySelector('#calculadora_button'));

//create calculator buttons
let buttonLocation = document.querySelector('#clearButton');
let backspace = document.createElement('button');
backspace.setAttribute('class', 'numero backspace');
backspace.setAttribute('id', 'backspace');
backspace.textContent = 'Backspace';
buttonLocation.appendChild(backspace);

let clearButton = document.createElement('button');
clearButton.setAttribute('class', 'numero clearBtn');
buttonLocation.appendChild(clearButton);

//create calculator main buttons

let calculatorMain = [
    '7','8','9','+','4','5','6','-','1','2','3','*','0','.','=','/'
]
for(let i = 0; i < calculatorMain.length; i++) {
    let button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.setAttribute('class', 'numero');
    button.textContent = calculatorMain[i];
    document.querySelector('#calculator_buttons').appendChild(button);
}


