//objects can be created in 2 ways:
// 1. using literal
// 2. using constructor(then singleton is created)--> Object.create

//USING LITERAL

const mySym = Symbol("key1")

const user= {
    name:"kaushiki",
    "full name": "kaushiki sahu",
    age:"20",
    "location": "noida",
    fruits: ["apple", "bannaa"],
    [mySym]: "mykey1" //symbol
}
console.log(user.age);
console.log(user["age"]); //[] me hmesha "" use honge

console.log(user["location"]);
//if key is in "" then it can only be accessed using []

console.log(user[mySym]); //mykey1

user.name= "rashi"
console.log(user.name);// to change values--> RASHI

//Object.freeze(user)// values are freezed now , cant be changed

user.name= "picchasi"
console.log(user.name);// --> RASHI

user.greeting = function(){
    console.log("hello user");
}

user.greeting();//hello user

user.greeting2 = function(){
    console.log(`hello user, ${this.name}`);
}
user.greeting2();//hello user, picchasi