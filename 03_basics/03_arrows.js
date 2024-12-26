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


// function chai(){
//     console.group(this);
// }

// chai() // returns a lot of things


// function chai(){
//     let username: "kaushiki"
//     console.log(this);
// }

// chai() //again returns a lot of thing avlble



// function chai(){
//      username= "kaushiki"
//     console.log(this.username)//gives kaushiki
//     //When you assign a value to username without declaring it with let, const, or var, JavaScript treats username as a property of the global object

// }
// chai()


//ANOTHER WAY OF DEFINING FUNCTION
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }



//++++++++++++ARROW FUNCTION +++
// SYNTAX: function ko hata ke () ke aage => lagado

const chai= () => {
    let username= "kaushiki"
    console.log(this); //{}
}
chai()

const addTwo= (a, b) => {
    return a+b
}
console.log(addTwo(3,4))//7
// {} JAB LAGAE TO RETURN LIKNA HOTA HI HAI ELSE RETURN CAN BE EXCLUDED

// OR

const add = (a, b) => a + b
console.log(addTwo(3,4))//7

// OR

const addAnother = (a, b) => (a + b)
console.log(addTwo(3,4))//7

//GIVING OBJECTS
const two = (a, b) => ({username: "kaushiki"});