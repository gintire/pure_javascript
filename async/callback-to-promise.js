'use strict'

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(id === 'gin' && password === 'tonic') resolve(id)
                else reject(new Error('not found'));
            }, 2000);
        })
    }
    getRole(user) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(user === 'gin') resolve({name:'gin', role: 'admin'});
                else reject(new Error('no access'));
            }, 1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRole)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} roles`))
  .catch(console.log)