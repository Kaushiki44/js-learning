// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = []
if (userEmail.length == 0) {
    console.log("Array is empty");//Array is empty
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");//Object is empty
}

// false ==0 ->true
// false =='' ->true
// 0 == '' ->true

// Nullish Coalescing Operator (??): null undefined
// The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when dealing with null or undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);
