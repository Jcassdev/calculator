 
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
    if (currentValue === '') return
    if (previousValue !== '') {
        equalTo();
    }
    operator = '+';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
    
})
subtract.addEventListener('click', function() {
    if (currentValue === '') return
    if (previousValue !== '') {
        equalTo();
    }
    operator = '-';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
})
multiply.addEventListener('click', function() {
    if (currentValue === '') return
    if (previousValue !== '') {
        equalTo();
    }
    operator = 'x';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;
})
divide.addEventListener('click', function() {
    if (currentValue === '') return
    if (previousValue !== '') {
        equalTo();
    }
    operator = '÷';
    previousValue = currentValue;
    currentValue = '';
    previousDisplay.textContent = previousValue + " " + operator;
    currentDisplay.textContent = currentValue;

})
equals.addEventListener('click', function() {
    equalTo();
    if (currentDisplay.textContent === '') {
        erase();
    }
    if (operator === '') {
        erase();
    }
    if (operator === '÷' && currentDisplay.textContent === '0') {
        alert('You can not divide by 0');
        erase();
    }
    previousDisplay.textContent = '';
    currentDisplay.textContent = previousValue;
});
clear.addEventListener('click', function() {
    erase();
});
del.addEventListener('click', function() {
    backOne();
})


function chooseNumber(num) {
    if (num === '.' && currentValue.includes('.')) return;
    currentValue += num;
};
function erase() {
    previousValue = '';
    currentValue = '';
    operator = '';
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = previousValue;
};
function equalTo () {
    if (operator === '+') {
        sum();
        return;
    } else if (operator === '-') {
        sub();
        return;
    } else if (operator === 'x') {
        mult();
        return;
    } else if (operator === '÷') {
        div();
        return;
    }

}
function sum() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    previousValue += currentValue;
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    return;
}
function sub() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    previousValue -= currentValue;
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    return;
}
function mult() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    previousValue *= currentValue;
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    return;
}
function div() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    previousValue /= currentValue;
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    return;
}
function backOne() {
    currentValue = currentValue.toString().slice(0, -1);
    currentDisplay.textContent = currentValue;
}
function round(num) {
    return Math.round(num * 100) / 100;
}