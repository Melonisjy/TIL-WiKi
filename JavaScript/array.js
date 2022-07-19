'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end (뒤에 추가)
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end (뒤에 삭제)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging (앞에 추가)
fruits.unshift('🍓','🍋');
console.log(fruits);

// shift: remove an item from the benigging (뒤에 추가)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push (pop과 push가 훨씬 빠르다.)
// splice: remove on item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1); // 지우고자 하는 인덱스 값을 지정하지 않으면 시작 인덱스 값부터 끝까지 지운다.
console.log(fruits);
fruits.splice(1, 1, '🍏','🍉'); // 지워진 자리에 새 요소 추가
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 해당하는 값이 없을 경우 '-1' 출력

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎')
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

