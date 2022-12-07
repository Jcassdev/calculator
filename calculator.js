 
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear")
let del = document.querySelector(".del");
let currentDisplay = document.querySelector(".display-current");
let previousDisplay = document.querySelector('.display-previous');
let numbers = document.querySelectorAll('.numbers');
let add = document.querySelector('.sum');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');

let currentValue = '';
let previousValue = '';
let operator = '';

numbers.forEach((num) => num.addEventListener('click', function(e) {
    chooseNumber(e.target.textContent);
    currentDisplay.textContent = currentValue;
}));
add.addEventListener('click', function() {
    operator = '+';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
})
subtract.addEventListener('click', function() {
    operator = '-';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
})
multiply.addEventListener('click', function() {
    operator = 'x';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
})
divide.addEventListener('click', function() {
    operator = '÷';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
})
equals.addEventListener('click', function(e) {
    if (operator === '+') {
        sum();
    } else if (operator === '-') {
        sub();
    } else if (operator === 'x') {
        mult();
    } else if (operator === '÷') {
        div();
    }
    previousDisplay.textContent = '';
    currentDisplay.textContent = previousValue;
});
clear.addEventListener('click', function(e) {
    erase();
});
function chooseNumber(num) {
    currentValue += num;
};
function erase() {
    previousValue = '';
    currentValue = '';
    operator = '';
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = previousValue;
};
function sum() {
    previousValue += currentValue;
}
function sub() {
    previousValue -= currentValue;
}
function mult() {
    previousValue *= currentValue;
}
function div() {
    if (previousValue === '0' || currentValue === '0') {
        previousDisplay.textContent = '';
        currentDisplay.textContent = '';
        operator = '';
        currentDisplay.textContent = '42';
    }
    previousValue /= currentValue;
}