class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai= new Teacher("chai", "chai@teacher.com", "123")

chai.logMe() //username is chai
chai.addCourse()//A new course was added by chai

const masalaChai= new User("masalaChai")
masalaChai.logMe()//username is masalaChai
// masalaChai.addCourse()//error

// The instanceof operator in JavaScript is used to test whether an object is an instance of a particular class (or constructor function) or whether it inherits from the prototype of a specific class.

console.log(chai instanceof User)//true
console.log(chai instanceof Teacher)//true