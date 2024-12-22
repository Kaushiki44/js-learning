//arrays
//an array can contain int, bool, and string values all at once

const arr = [11, 12, 13, 14]
const names = ["kaushiki", "rashi"]

const nos= new Array(1,2,3,4)
// console.log(arr[1]) //12

// ARRAY METHODS
arr.push(20) //INSERTION
arr.push(30)
console.log(arr);
//[ 11, 12, 13, 14, 20, 30 ]

arr.pop()   // DELETION
console.log(arr);
[ 11, 12, 13, 14, 20 ]


//unshift adds the specified elements to the beginning of an array
arr.unshift(100)
console.log(arr);
//[ 100, 11, 12, 13, 14, 20 ]
arr.unshift(200)
console.log(arr);
//200, 100, 11, 12, 13,  14, 20

//shift removes the first element from an array
console.log(arr.shift())

console.log(arr.includes(98));//false
console.log(arr.indexOf(11));//1

const newArr = arr.join()
//returns the array elements but then it becomes string

console.log(newArr);
//100,11,12,13,14,20
console.log(typeof newArr)
//string

const nums=[1,2,3,4,5]

const my1 = nums.slice(1,3)
console.log(my1);//[ 2, 3 ]
console.log(nums);
//[ 1, 2, 3, 4, 5 ]

const my2 = nums.splice(1,3)
console.log(my2);//[ 2, 3, 4 ]
console.log(nums);//[ 1, 5 ]

//slice gives the substring, doesnt include the range, doesnt manipulate the original array

////splice gives the substring including the range, and manipulates the original array




