'use strict'

// Promise is a JavaScript object of asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer


// producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // 성공했을 때 resolve 함수에 데이터를 넣어 실행
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
})


// consumer
// then, catch, finally
promise
    // 성공했을 때
    .then((value) => {
    console.log(value);
    })

    // 에러 나왔을 때 수행할 callback 함수
    .catch(error => {
        console.log(error);
    })

    // 성공 유무 관계 없이 무조건 실행되는 함수
    .finally(() => {
        console.log('finally');
    })


// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
.then(getEgg)
.catch(error => {
    return '🍗';
})
.then(cook)
.then(console.log)
.catch(console.log);