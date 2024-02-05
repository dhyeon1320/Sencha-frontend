'use strict'

// Literals & Properties
// object = {key: value}
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const ellie = { name: 'ellie', age: 4 };

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);


// Computed properties
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');


// property value shorthand
function makePerson(name, age) {
    return {
        name,
        age,
    }
}

const person1 = makePerson('ellie', 30)
console.log(person1);


// Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const person2 = new Person('ellie', 30)
console.log(person2);


// in operator
console.log('name' in ellie);
console.log('age' in ellie);
console.log('height' in ellie);
console.log(ellie.height);


// for..in vs for..of
// for (key in obj)
for (const key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,6,7];
for (const value of array) {
    console.log(value);
}


// Cloning
const user = {name: 'ellie', age: '20'};
const user2 = user
console.log(user);

// old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}

console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
user4['name'] = 'kim';
console.log(user4)
console.log(user)

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'}
const mixed = Object.assign({}, fruit2, fruit1);
console.log(mixed.color);
console.log(mixed.size);