'use strict'

// Array
const arr1 = new Array();
const arr2 = [1, 2];


// Index Position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// Looping
for (let i = 0; i > fruits.length; i++) {
    console.log(fruits[i])
}

for (const value of fruits) {
    console.log(value)
}

fruits.forEach((fruit) => console.log(fruit))


// Addition, deletion, copy
// push
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift
fruits.unshift('strawberry', 'peach');
console.log(fruits);

// shift
fruits.shift();
fruits.shift();
console.log(fruits);

// splice
fruits.push('strawberry', 'peach', 'lemon');
fruits.splice(1,2, 'orange')
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut']
const newfruits = fruits.concat(fruits2);
console.log(newfruits);


// Searching
console.log(fruits);

// indexOf
console.log(fruits.indexOf('apple'))

// includes
console.log(fruits.includes('apple'))

// lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple'))
console.log(fruits.lastIndexOf('apple'))






