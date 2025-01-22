//after ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword()) //123abc
console.log(chai.changeUsername())//CHAI

//behind the scene
//OR

// function User(username, email, password){
//     this.username=username;
//     this.email = email;
//     this.password = password
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }