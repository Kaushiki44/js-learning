const num= [1,2,3,4,5,6,7,8]

//map() -- Used to transform each element in an array and create a new array with the results.

const newNum= num.map( (n) => n+10)
console.log(newNum)
//[
//     11, 12, 13, 14,
//     15, 16, 17, 18
//   ]

//CHAINING
const abc = num
            .map((n) => n*10) //[10, 20, 30, 40, 50, 60, 70, 80]
            .map((n) => n+1)  //[11, 21, 31, 41, 51, 61, 71, 81]
            .filter((n) => n>=40)  //[41, 51, 61, 71, 81]
            
console.log(abc) //[ 41, 51, 61, 71, 81 ]
