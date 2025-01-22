// the call method is a built-in function used to call a function with a specific this value and arguments provided individually. It allows you to invoke a function and explicitly set the value of this inside that function.


function setUsername(username){
    //complex DB calls done
    this.username= username
    console.log("called")
}
function createUser(username, email, password){
    setUsername.call(this, username)
    //agar sirf setUsername(username) call krte to execution context banta setusername ka. ussi me username ki value set hoti aur call wpas aane pe username vanish
    //islie call(this, ) me ham current main wle this ki value set krte h 
    this.email = email
    this.password= password
}

const chai = new createUser("chai", "chai@fb.com", "123"
)
console.log(chai);
// called
// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

// in case of : setUsername(username)
// called
// createUser { email: 'chai@fb.com', password: '123' }