//LITERAL OBJECT
// const user={}
// console.log(user);   //{}

///CONSTRUCTOR OBJECT
// const user = new Object()
// console.log(user);     //{} --> singleton

const user={}
user.id="1234ab"
user.name= "kaushiki"
user.isLoggedIn = false

const anotherUser = {
    email: "k@gmail.com",
    details: {
        fullname:{
            firstname: "kaushiki",
            lastname: "sahu"
        }
    }
}
console.log(anotherUser.details.fullname.firstname);//kaushiki


const obj1= { 1: "a", 2:"b"}
const obj2= { 3: "a", 4:"b"}
const obj3= { 5:"a", 6:"b"}

const obj4= {obj1, obj2}
console.log(obj4);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//NOT A GOOD WAY

//BETTER METHOD
const obj5 = Object.assign({}, obj1, obj2, obj3) //{}->target, baki sab source(jaha se sab copy hokke {} aayega)
console.log(obj5)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj1)//{ '1': 'a', '2': 'b' }

//best method SPREAD OPERATOR
obj6={...obj1, ...obj2, ...obj3};
console.log(obj6);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//array ke andar objects
const newUser = [
        {
        id: 1,
        email: "kaush@gmail.com",
    },
    {
        id: 2,
        email: "rashi@gmail.com",
    },
    {
        id: 3,
        email: "pichasi@gmail.com",
    }
]

console.log(newUser[1].email) //rashi@gmail.com

console.log(user)
// { id: '1234ab', name: 'kaushiki', isLoggedIn: false }

console.log(Object.keys(user))
// [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(user)) //[ '1234ab', 'kaushiki', false ]

console.log(Object.entries(user))
//[ [ 'id', '1234ab' ], [ 'name', 'kaushiki' ], [ 'isLoggedIn', false ] ]

console.log(user.hasOwnProperty('isLoggedIn'));//true
console.log(user.hasOwnProperty('isLogged'));//false



//OBJECT DESTRUCTURING
const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kaushiki"
}

console.log(course.courseInstructor)  //kaushiki

const {courseInstructor} = course
console.log(courseInstructor)
//now you dont have to write course.courseInstructor. just write courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor)
//now u dont have to write courseInstructor. just write instructor


//JSON
{
    "name": "kaushiki",
    "coursename": "js in hindi",
    "price": "free"
}