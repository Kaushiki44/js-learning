//  the static keyword is used in classes to define static methods and properties. These members belong to the class itself rather than to instances of the class. This means you can call a static method or access a static property directly on the class, without creating an object of that class.

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const kaush = new User("kaush")
// console.log(kaush.createId())  -- throws ERROR bcs createId is static and cant be accessed by instance

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@iphone.com")
//console.log(iphone.createId())
//error