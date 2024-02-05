'use strict'

// async & await
// clear style of using promise

// async
// async를 사용하면 promise를 쓰지 않아도 자동으로 promise로 실행해줌
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

// async 사용하지 않았을 때
function pickFruits() {
    // apple 받아옴
    return getApple()
    // apple 받아오면 바나나를 받아옴
    .then(apple => {
        return getBanana()
        // 바나나도 받아오면 apple, banana 받아옴
        .then(banana => `${apple} + ${banana}`)
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
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(', '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);