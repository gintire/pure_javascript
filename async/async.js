// async & await
// clear style of using pormise

// 1. async
function fetchUser() {
    // do network request in 10 secs...
    return 'gintonic';
}

function fetchUserPromise() {
    return new Promise((resolve, reject) => {
        resolve('gintonic');
    });
}

async function fetchUserAsync() {
    // do network request in 10 secs....
    return 'gintonic'
}

//const user = fetchUserPromise();
const user = fetchUserAsync();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(2000);
    return 'banana';
}
async function pickFruits() {
    //return getApple()
    //.then(apple =>
    //    getBanana()
    //   .then(banana => `${apple} + ${banana}`));

    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log)

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

// 4. HW
