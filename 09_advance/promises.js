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