let currentInput = 0; //change these to const?
let previousInput = 0;
let calcResult = 0;
let displayValue = '';
let operator = '';
const divByZeroMsg = 'Cannot divide by zero!';

const display = document.getElementById("display");

function clearAll() {
    display.value = '';
    currentInput = 0;
    previousInput = 0;
    operator = '';
}

function numberInput(char) {
    if (display.value === divByZeroMsg) {
        clearAll();
    }
    display.value += char;
}

function operatorInput(char) {
    if (display.value === divByZeroMsg) {
        display.value = 0;
    }
    previousInput = parseInt(display.value);
    operator = char;
    display.value = '';
}

function calculate() {
    currentInput = parseInt(display.value);
    
    if (currentInput === 0 && operator === '÷') {
        calcResult = divByZeroMsg;
    }
    else {
        calcResult = operate(previousInput, currentInput, operator);
    }
    
    display.value = calcResult;
}

function operate(num1, num2, oper) {
    switch (oper) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;      
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}