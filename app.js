let currentInput = 0;
let previousInput = 0;
let calcResult = 0;
let operator = '';
let shouldResetDisplay = false;
let equalsJustPressed = false;
const divByZeroMsg = "Div by zero error!";

const display = document.getElementById("display");

function clearAll() {
    display.value = '';
    currentInput = 0;
    previousInput = 0;
    operator = '';
}

function numberInput(char) {
    if (display.value === divByZeroMsg || isNaN(display.value)) {
        clearAll();
    }

    if (shouldResetDisplay) {
        display.value = char;
        shouldResetDisplay = false;
    } else {
        display.value += char;
    }
}

function operatorInput(char) {
    if (display.value === divByZeroMsg || isNaN(display.value)) {
        display.value = 0;
    }
    
    if (operator !== '' && !equalsJustPressed) {
        calculate();
    }
    previousInput = parseFloat(display.value);
    operator = char;
    shouldResetDisplay = true;
    equalsJustPressed = false;
}

function toggleSign() {
    display.value = (-1 * parseFloat(display.value)).toString();
}

function percent() {
    display.value = (parseFloat(display.value) / 100).toString();
}

function addDecimal() {
    if (display.value === divByZeroMsg || isNaN(display.value)) {
        clearAll();
    }

    // If display should reset or is empty, start with "0."
    if (shouldResetDisplay || display.value === '') {
        display.value = "0.";
        shouldResetDisplay = false;
        return;
    }

    // Only add decimal if there isn't one already
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearEntry() {
    display.value = '';
    shouldResetDisplay = false;

    if (equalsJustPressed) {
        clearAll();
    }
}

function calculate() {
    equalsJustPressed = true;
    currentInput = parseFloat(display.value);
    
    if (currentInput === 0 && operator === '÷') {
        calcResult = divByZeroMsg;
    }
    else {
        calcResult = operate(previousInput, currentInput, operator);
    }
    
    if (typeof calcResult === 'number') {
        let resultString = calcResult.toString();
    
        if (resultString.length > 13) {
            let integerPart = Math.floor(Math.abs(calcResult)).toString();
            let availableDecimals = 13 - integerPart.length - (calcResult < 0 ? 1 : 0);
            calcResult = Number(calcResult.toFixed(availableDecimals));
        }
    }
    
    display.value = calcResult;
}

function operate(num1, num2, oper) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
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