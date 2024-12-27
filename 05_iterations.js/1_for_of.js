//forof- maps, arrays, (not on objects)
const numbers= [11, 12, 13, 14, 15]
for (const num of numbers) {
    // console.log(num);
}
// 11
// 12
// 13
// 14
// 15

const greetings="HELLO WORLD!"
for (const greet of greetings) {
    // console.log(greet)
}
//H
// E
// L
// L
// O
 
// W
// O
// R
// L
// D
// !

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")

console.log(map)
//Map(3) { 'IN' => 'India', 'USA' => 'America', 'Fr' => 'France' }


for(const key of map){
    console.log(key)
}
//[ 'IN', 'India' ]
// [ 'USA', 'America' ]
// [ 'Fr', 'France' ]
// NOT PRINTING KEYS 
//INSTEAD


//syntax for separately printing
for (const [keya, valuea] of map) {
    console.log(keya, ':-' , valuea);
}
//IN :- India
// USA :- America
// Fr :- France

