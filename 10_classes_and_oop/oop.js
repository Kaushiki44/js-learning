const user ={
    username: "kaushiki",
    loginCount: 10,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`username is ${this.username}`)
        //necessary to use THIS here to refer to current context bcs in js engine context kho sa jata h
        console.log(this);
        // {
        //     username: 'kaushiki',
        //     loginCount: 10,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
       
    }
   
   
}
console.log(user.username);//kaushiki
console.log(user.getUserDetails()); //Got user details from database
// username is kaushiki

console.log(this) //{}
//but in the browser it gives windows and a list of other things