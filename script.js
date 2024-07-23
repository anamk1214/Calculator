let display = document.querySelector('.display');
let previousOperand = null;
let operator = null;

function appendNumber(num) {
    display.textContent += num;
}

function appendOperator(op) {
    previousOperand = parseFloat(display.textContent);
    operator = op;
    display.textContent += op;
}

function calculate() {
    let currentOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(operator) + 1));
    let result;

    switch (operator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            result = previousOperand / currentOperand;
            break;
    }

    display.textContent = result;
}

function clearDisplay() {
    display.textContent = '';
    previousOperand = null;
    operator = null;
}