const inputDisplay = document.getElementById('input-text-box')
const inputButtons = document.querySelectorAll('.input-button');
const operationButtons = document.querySelectorAll('.operation-button')
const clearButton = document.getElementById('clear-button')
const backSpaceButton = document.getElementById('backspace-button')


let operation = "";

inputButtons.forEach(function (button) {
    button.value = button.textContent;
    button.addEventListener('click', function() {
        if (inputDisplay.value.length < 13 && inputDisplay.value != "") {
        inputDisplay.value += this.value;
        } else if (inputDisplay.value.length < 13 && inputDisplay.value == "") {
            inputDisplay.value = this.value;
        }
    })
})

operationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        operation = this.value;
        console.log(operation)
    })
})

clearButton.addEventListener('click', function() {
    inputDisplay.value = "";
    operation = "";
})

backSpaceButton.addEventListener('click', function() {
    if (inputDisplay.value != "" && inputDisplay.value.length > 1) {
        let a = Array.from(inputDisplay.value)
        a.pop();
        inputDisplay.value = parseInt(a.join(""));
    } else {
        inputDisplay.value = "";
    }
})


const footer = document.getElementsByClassName('footer');
footer[0].textContent = `Copyright © ${new Date().getFullYear()} Castle Coding`;

const subtract = (a, b) => a - b;

const add = (array) => array.reduce((total, current) => total + current, 0);

const multiply = function (array) {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};

const divide = (a, b) => a / b;

function operate(operator, a, b) {
    switch (operator) {
        case "addition":
            return add([a, b]) // code block
            break;
        case "subtraction":
            return subtract(a, b) // code block
            break;
        case "multiplication":
            return multiply([a, b])// code block
            break;
        case "divison":
            if (divide(a, b) != Infinity) {
                return divide(a, b)
            } else return "Undefined"
            break;
    }
}