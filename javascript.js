const inputDisplay = document.getElementById('input-text-box')
const historyDisplay = document.getElementById('history-text-box')
const inputButtons = document.querySelectorAll('.input-button');
const operationButtons = document.querySelectorAll('.operation-button')
const clearButton = document.getElementById('clear-button')
const backSpaceButton = document.getElementById('backspace-button')


let operation = "";
let a = null;
let result = null;
let lastButtonPressed = "";

inputButtons.forEach(function (button) {
    button.value = button.textContent;
    button.addEventListener('click', function () {

        if (inputDisplay.value.length < 13 && inputDisplay.value != "" && lastButtonPressed == "") {
            inputDisplay.value += this.value;
            lastButtonPressed = "";
        } else if (inputDisplay.value.length < 13 && inputDisplay.value == "" && lastButtonPressed == "") {
            inputDisplay.value = this.value;
        } else if (lastButtonPressed != "") {
            inputDisplay.value = this.value;
            lastButtonPressed = "";
        }
    })
})

operationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (a != null && result == null) {
            result = operate(operation, parseFloat(a), parseFloat(inputDisplay.value));
            operation = this.value;
            historyDisplay.placeholder = `${result} ${this.textContent}`;
            lastButtonPressed = this.value;
        } else if(a != null && result != null) {
            result = operate(operation, parseFloat(result), parseFloat(inputDisplay.value));
            operation = this.value;
            historyDisplay.placeholder = `${result} ${this.textContent}`;
            lastButtonPressed = this.value;
        } else {
            operation = this.value;
            a = inputDisplay.value; 
            lastButtonPressed = "";
            historyDisplay.placeholder = `${a} ${this.textContent}`;
            lastButtonPressed = this.value;
        }
    })
})

clearButton.addEventListener('click', function () {
    inputDisplay.value = "";
    operation = "";
    historyDisplay.placeholder = "";
    result = null;
    a = null;
})

backSpaceButton.addEventListener('click', function () {
    if (inputDisplay.value != "" && inputDisplay.value.length > 1) {
        let a = Array.from(inputDisplay.value)
        a.pop();
        inputDisplay.value = parseFloat(a.join(""));
    } else {
        inputDisplay.value = "";
    }
})


const footer = document.getElementsByClassName('footer');
footer[0].textContent = `Copyright © ${new Date().getFullYear()} Castle Coding`;

const subtract = (a, b) => a - b;

const add = (a, b) => a + b;

const multiply = function (a, b) {
    return a * b;
};

const divide = (a, b) => a / b;

function operate(operator, a, b) {
    switch (operator) {
        case "addition":
            return add(a, b) // code block
            break;
        case "subtraction":
            return subtract(a, b) // code block
            break;
        case "multiplication":
            return multiply(a, b)// code block
            break;
        case "divison":
            if (divide(a, b) != Infinity) {
                return divide(a, b)
            } else return "Undefined"
            break;
    }
}