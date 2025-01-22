let myName = "kaushiki    "

// console.log(myName.trim().length) 
//DO THE UPPER THING USING trueLength

String.prototype.trueLength= function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
myName.trueLength();
// kaushiki    
// True length is: 8
"iceTea".trueLength()
// iceTea
// True length is: 6


//array
let myHeroes= ["Thor", "spiderman"]
//object
let heroPower={
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// Object.prototype is a property of the Object constructor. It allows you to add custom properties or methods to all objects because every object in JavaScript 

//inserting kaushiki property in the highest hierarchy ie Object, so it can be accessed by all functions , arrays and strings
Object.prototype.kaushiki = function(){
    console.log(`kaushiki is present in all objects`)
}

//inserting heyKaush only in arrays
Array.prototype.heyKaush = function(){
    console.log(`Kaush says hello`)
}

heroPower.kaushiki() //-->kaushiki is present in all objects
myHeroes.kaushiki() //-->kaushiki is present in all objects
myHeroes.heyKaush()  //Kaush says hello
// heroPower.heyKaush() --> throws error bcs heyKaush ka acces is only given to array not object

//INHERITANCE
// __proto__ : objects can inherit properties and methods from other objects.
const user={
    name: "chai",
    email: "chai@google.com"
}
const teacher={
    makeVideos: true
}
const teachingSupport={
    isAvailble: true
}
const TASupport={
    makeAssignment: true,
    fullTime: true,
    __proto__: teachingSupport
}
Teacher.__proto__= user //teacher can access the properties of user

//MODERN SYNTAX
Object.setPrototypeOf(teachingSupport, teacher)



