'use strict';

// Object
// one of the JavaSciprt's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const gintonic = {name: 'gintonic', age: 4}
print(gintonic);

gintonic.hasJob = true;
console.log(gintonic.hasJob);

delete gintonic.hasJob;
console.log(gintonic.hasJob);

// 2. Computed properties
// key should be always string
console.log(gintonic.name);
console.log(gintonic['name']);

gintonic['hasJob'] = true;
console.log(gintonic.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(gintonic, 'name');

//3. Property value shorthand
const person1 = { name: 'bob', age:2 };
const person2 = { name: 'bob', age:2 };
const person3 = { name: 'bob', age:2 };
const person4 = makePerson('gintonic2', 30);
console.log(person4);
function makePerson(name, age) {
    return {name, age};
}

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person('gintonic3', 30);
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log('name' in gintonic);
console.log('age' in gintonic);
console.log('random' in gintonic);
console.log(gintonic.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in gintonic) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 5];
for(let i of array) {
    console.log(i);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'gintonic', age: 20};
const user2 = user;

//user2.name = 'coder';
console.log(user.name);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}

console.clear();
console.log(user3);


const user4 = Object.assign({}, user);

user.name = 'coder';
console.log(user4);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const fruit3 = {color: 'yellow', name: 'banana'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);

console.log(mixed);