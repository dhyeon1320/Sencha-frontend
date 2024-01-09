'use strict'

// q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    let a1 = '';
    for (const value of fruits) {
        a1 += value;
    }
    console.log(a1);

    const r1 = fruits.join();
    const r1_1 = fruits.toString();
    console.log(r1);
    console.log(r1_1);
}

// q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry';
    const a2 = fruits.split(',');
    console.log(a2);
}

// q3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const a3 = array.reverse();
    console.log(a3);
    console.log(array); // array 자체를 변경시킴
}

// q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const a4 = array.slice(2)
    console.log(a4)
    console.log(array)
    // splice : 배열 자체를 수정
    // slice : 배열 중 원하는 부분만 가져옴
}


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// q5. find a student with the score 90
{
    // find : parameter로 받은 함수 결과가 true이면 해당하는 element 반환
    const r5 = students.find((student) => student.score === 90);
    console.log(r5);
}

// q6. make an array of enrolled students
{
    const a6 = students.filter((student) => student.enrolled);
    console.log(a6);
}

// q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const a7 = students.map((student) => student.score)
    console.log(a7)
}

// q8. check if there is a student with the score lower than 50
{
    const a8 = students.some((student) => student.score < 50)
    console.log(a8)
    const r8 = !students.every((student) => student.score >= 50)
    console.log(r8)
}

// q9. compute students' average score
{
    const r9 = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(r9 / students.length)
}

// q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const a10 = students
        .map((student) => student.score)
        .join();
    console.log(a10)
}

// bonus do q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const aBonus = students
        .map((student) => student.score)
        .sort((a,b) => a - b)
        .join();
    console.log(aBonus);
}