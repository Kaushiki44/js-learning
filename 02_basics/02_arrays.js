const fruits = ["apple", "banana", "cherry"]
const vegs = ["pea", "aloo"]

//fruits.push(vegs)
//console.log(fruits);
//[ 'apple', 'banana', 'cherry', [ 'pea', 'aloo' ] ]

//console.log(fruits[3][1]);//aloo

//BETTER METHOD - CONCAT
//Combines two or more arrays. This method returns a new array without modifying any existing arrays
// const mix = fruits.concat(vegs)
// console.log(mix)
//[ 'apple', 'banana', 'cherry', 'pea', 'aloo' ]

//BEST METHOD - SPREAD OPERATOR
//GLASS TUT K SPREAD
const mix = [...fruits, ...vegs];
console.log(mix);
//[ 'apple', 'banana', 'cherry', 'pea', 'aloo' ]

const all= [1, 2, 3, [4, 5], [6, 7, 8, [12,123]]]
const newAll= all.flat(Infinity)
console.log(newAll);
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
//[
//     1, 2, 3,  4,   5,
//     6, 7, 8, 12, 123
//   ]

console.log(Array.isArray("kaushiki"));//false

console.log(Array.from("kaushiki"));
// [
//     'k', 'a', 'u',
//     's', 'h', 'i',
//     'k', 'i'
//   ]

console.log((Array.from({name: "kaushiki"})));//[] -- INTERESTING

const score1= 100
const score2= 200
const score3= 300
console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]





