//setter function is used to set the given value in the database
//getter is used to get the values from the database

//property, getter and setter should have the same names

class User{
    constructor(email, password){
        this.email= email
        this.password= password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}kaush`
    }

    set password(value){
        this._password = value
    }
}

const kaush = new User("k@kaush.ai", "abc")

console.log(kaush.password)//abckaush
console.log(kaush.email)//K@KAUSH.AI

// constructor and setter , both set the value (of eg: email)
// then there begins a race btween the 2 and both are called recursively 
// hence we give different names of the property in the getter setter 

//constructor set krta h value but in the presence of setter , the values are overwritten