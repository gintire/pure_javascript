'use strict'

// Array

// 1. Decaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping over an array
for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(i=>console.log(i));

fruits.forEach((fruit) => console.log(fruit))

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('berry', 'peach');
// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('berry', 'peach');
console.log(fruits);
// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

fruits.splice(1,1, '🍖', '🍗');
console.log(fruits);