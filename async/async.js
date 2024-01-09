'use strict'

// async & await
// clear style of using promise

// async
async function fetchUser() {
    // do network request in 10 secs
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(3000);
    return 'apple';
}

async function getBanana() {
    await delay(3000);
    return 'banana';
}

function getBanana() {
    return delay(2000)
    .then(() => 'banana');
}

function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`)
    })
}

// 위 함수에 async 사용
async function pickfruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickfruits().then(console.log);


// useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);