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

