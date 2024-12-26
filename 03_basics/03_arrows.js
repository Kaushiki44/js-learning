const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this refers to the current context
        //{
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
    }

}
// user.welcomeMessage()//hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage()//sam , welcome to website


console.log(this);//{} in node environment, {} are returned
//in browser, window object is returned