'use strict';

// JavaScript is symchronous
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
console.log('2');
console.log('3');


// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
// 사용자의 데이터를 backend에서 받아오는 class
class UserStorage {
    // 사용자 로그인
    loginUser(id, password, onSuccess, onError) { // onSuccess, onError 가 callback 함수
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                // 성공하면 작동하는 callback 함수 -> id를 넣어서 getRoles 함수 불러옴
                onSuccess(id);
            } else {
                // error 나면 작동하는 callback 함수
                onError(new Error('not found'));
            }
        }, 2000);
    }

    // 사용자 역할을 요청해서 가져옴
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                // 사용자가 ellie이면 작동하는 callback 함수
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
// 로그인
userStorage.loginUser(
    id, 
    password, 
    user => {
        // 사용자 역할 요청
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            // 실패했을 때 함수
            error => {
                console.log(error);
            }
        );
    },
    (error) => {
        console.log(error);
    }
    )