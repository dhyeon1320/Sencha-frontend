'use strict'

// object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie': value;
})
console.log(json);


// JSON to object
// parse(json)
json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump(); // error

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // error

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})

console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate())