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
undefined