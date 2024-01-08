'use strict';

function log(message) {
    console.log(message);
}

log('Hello');
log(123);


// parameters
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


// default parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}

showMessage('Hi!');


// Rest parameters
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'club')


// Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage)
}

printMessage();


// Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);


// Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrabe logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrage logic...
}


// Function expression
const print = function () {
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


// Callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes!');
};
// named function
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
const simplePrint = function () {
    console.log('simplePrint');
}

// const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};


// IIFE
(function hello() {
    console.log('IIFE');
})();


function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'muliply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(`answer: ${calculate('add', 1, 2)}`);