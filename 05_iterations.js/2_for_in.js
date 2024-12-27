// FOR IN - object, array, NOT ON MAPS

//OBJECTS
const myObj={
    js: 'javascript',
    cpp: "c++"
}
for (const key in myObj) {
    console.log(key)//printing keys
}
//js
//cpp

for (const key in myObj) {
    console.log(myObj[key])//printing values
}
//javascript
// c++


//ARRAYS
const fruits=["apple", "banana", "cherry", "dates"]

for (const key in fruits) {
   console.log(key)
}
//0
// 1
// 2
// 3

for (const key in fruits) {
    console.log(fruits[key])
 }
 //apple
// banana
// cherry
// dates