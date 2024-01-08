'use strict';

// String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2=${1+2}`);
console.log("ellie's book")


// Numeric operators
console.log(2 + 3); // add
console.log(2 - 3); // substract
console.log(2 * 3); // multiply
console.log(2 / 3); // divide
console.log(2 % 3); // remainder
console.log(2 ** 3); // exponentiaion


// Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1 ;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
const predecrement = --counter;
// counter = counter - 1
// preIncrement = counter;
console.log(`preIncrement: ${predecrement}, counter: ${counter}`)
const postdecrement = counter--;
// postIncrement = counter;
// counter = counter - 1 ;
console.log(`postIncrement: ${postdecrement}, counter: ${counter}`)


// Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // more than
console.log(10 >= 6); // more than or equal


// Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)

//&&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('🎉')
    }
    return true;
}

// !(not)
console.log(!value1);


// Equality
const stringFive = '5';
const numberFive = 5;

// == : loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === : strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality -puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// Conditional operators : if
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcom, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}


// Ternary operator( ? : )
console.log(name === 'ellie' ? 'yes' : 'no');


// Switch statement
const browser = 'Firefox';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}


// Loops
// while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for
for (i = 3; i > 0; i--) {
    console.log(`for: i: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`)
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// Quiz
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(`i: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (i = 0; i <= 10; i++) {
    console.log(`i: ${i}`);
    if (i == 8) {
        break;
    }
}