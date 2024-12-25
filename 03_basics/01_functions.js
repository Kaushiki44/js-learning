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



//passing objects in a function

const user={ //object
    username: "kaushiki",
    price: 199
}

function handleObject(anyObject)
{//function
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
   
}

// handleObject(user)
//-> Username is kaushiki and price is 199
// or
handleObject({
    username: "sam",
    price: "200"
})
//--> Username is sam and price is 200


//passing array in a function
const arr = [10, 20, 30, 40]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(arr)); //20
// or
console.log(returnSecondValue([100,200,300]));//200
