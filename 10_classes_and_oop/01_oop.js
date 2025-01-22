//Object
// Object Literal is a way to create an object using a simple syntax of key-value pairs enclosed within curly braces {}
const user ={
    username: "kaushiki",
    loginCount: 10,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`username is ${this.username}`)
        //necessary to use THIS here to refer to current context bcs in js engine context kho sa jata h
        //console.log(this);
        // {
        //     username: 'kaushiki',
        //     loginCount: 10,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
       
    }
   
   
}
// console.log(user.username);//kaushiki
// console.log(user.getUserDetails()); //Got user details from database
// username is kaushiki

// console.log(this) //{}
//but in the browser it gives windows and a list of other things


//CONSTRUCTOR FUNCTION
// Before class syntax was introduced in ES6, constructor functions were used to create objects with reusable properties and methods.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount,
    this.isLoggedIn= isLoggedIn;

    return this// implicitly bhi hota h, kro na kro same baat
}

//defining a structure and creating different users
const userOne = new User("kaushiki", 12, true);
const userTwo = new User("rashi", 1, false);
console.log(userOne.constructor)//[Function: User]
console.log(userOne);
console.log(userTwo)
// User { username: 'kaushiki', loginCount: 12, isLoggedIn: true }
// User { username: 'rashi', loginCount: 1, isLoggedIn: false }

// 1. new keyword creates an empty obj callled instance
// 2. cons func is called due to new 
// 3. this keyword wle sab usme injecr hote 
// 4. fir sab hme milte