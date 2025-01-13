const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task is complete ");
        resolve()// --> CONNECTED TO THEN PART
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})
//Asyn task is complete 
//Promise consumed


//ANOTHER SYNTAX OF DOING IT WITHOUT STORING THE PROMISE IN ANOTHER VARIABLE 

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("async task 2 complete")
        resolve()
    }, 1000)

 }).then(function(){
    console.log("Async task 2 resolved");
 })
//  Asyn task is complete 
//  Promise consumed
//  async task 2 complete
//  Async task 2 resolved


//PASSING PARAMETERS IN RESOLVE- can pass object/array anything
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})
// { username: 'Chai', email: 'chai@example.com' }


//resolve is connected to THEN 
// reject -> catch
// finally -> always executed
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username: "Kaushiki", password: "123"})
        }
        else{
            reject('Error: something is wrong')
        }
    }, 1000)
})
//chaining
promiseFour
.then( (user)=>{
    console.log(user);
    return user.username
    // if returning smthing in THEN part then it is used (returned) in the next THEN part using chaining
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally( ()=> console.log("the promise is either resolved or rejected"))

//when error= true
// Error: something is wrong
// the promise is either resolved or rejected

// when error= false
// { username: 'Kaushiki', password: '123' }
// Kaushiki
// the promise is either resolved or rejected


//OR
//ASYNC AWAIT
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
    if(!error){
        resolve({username: "rashi", password: "123"})
    }
    else{
        reject("Error: everything went wrong")
    }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
        //gets executed when error= false
        // { username: 'rashi', password: '123' }
    }
    catch(error){
        console.log(error);
        // gets executed when error= true
        //Error: everything went wrong
    }
}
consumePromiseFive();



// The .json() method is a function available on the Response object in JavaScript, typically used in conjunction with the fetch() API.

// The .json() method parses the JSON-encoded string in the response body and transforms it into a JavaScript object. Since parsing JSON is an asynchronous operation (as the data might take some time to arrive), .json() returns a Promise.

// Returns a Promise: Since .json() involves reading and parsing a stream, it returns a promise. Always handle it asynchronously with await or .then().

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') 

        //console.log(response);
        //prints data in json string format which os tough to read

        // TO MAKE RESPONSE IN A READABLE FORMAT, WE CONVERT THE JSON STRING TO JS OBJECT USING .json()
        // AND SINCE THIS CONVERSION TAKES TIME, WE PUT IT INTO "AWAIT"

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error)
    }
}
getAllUser();
// user data is printed from the  api link

//OR
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.