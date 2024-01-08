'use strict';

// let, read/write
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'kim';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var, don't use
age = 4;
var age;

console.log(age);

// const, read only
const daysInWeek = 7;
const maxNumber = 5;

// data type

// number
const count = 12; //integer
const size = 1.2; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nan = 'not a number' / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nan);

const bigInt = 1231212312312312123n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);

// object
const ellie = {name : 'ellie', age: 20}
ellie.age = 21;
console.log(`value: ${ellie}, type: ${typeof ellie}`);


// Dynamic typing
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

