// addTwoNumbers()
//        ^     ^
//        |     |      
//  reference   execution

function greet(name) { // 'name' is a parameter
    console.log(`Hello, ${name}!`);
}

greet("kaushiki");  //kaushiki is a argument


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("kaushiki")) //kaushiki just logged in
console.log(loginUserMessage())
//undefined just logged in


function message(user){
    if(!user)
    {
        console.log("please enter the user")
        return
    }

    return `${user} just enterred`
}
console.log(message());
//please enter the user
//undefined


//REST OPERATOR -- takes all arguments passed 
function calculate(...num){
    return num
}
console.log(calculate(200, 300, 400));//[ 200, 300, 400 ]

function calc(a, b, ...num){
    return num
}
console.log(calc(200, 300, 400,500, 600));  //[ 400, 500, 600 ]
// this means a= 200 , b=300 and rest went to num