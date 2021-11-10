function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i=0; i<args.length; i++) {
        console.log(args[i])
    }
    for(const arg of args) {
        console.log(arg)
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'gintonic')

// 5.Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'local';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
function sum (a, b) {
    return a + b;
}

const result = sum (1, 2);
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic ...
    }
    if(user.point <= 10) {
        return;
    }
}

// Fist-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other funcitons.
// can be returned by another function
// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz (answer, printYes, printNo) {
    if (answer == 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('Yes!!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('No!!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simpePrint = function() {
    console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();