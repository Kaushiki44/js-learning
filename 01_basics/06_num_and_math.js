const score = 400
console.log(score);
 //400
const balance = new Number(100)
//console.log(balance);  //[Number: 100]

//console.log(balance.toString().length); //3
//console.log(typeof(balance.toFixed(2)));//100.00

const no = 123.56
//console.log(no.toPrecision(4));
//123.6
//console.log(no.toPrecision(3));//124

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) //10,00,000

const numObj = new Number(10);
//console.log(typeof numObj); // object

// +++++++ maths +++++++

// console.log(Math);
// console.log(Math.abs(-4));   //4
// console.log(Math.round(4.6));//5
// console.log(Math.floor(4.6));//4
// console.log(Math.ceil(4.6));//5
// console.log(Math.min(4,6,9,2));//2
// console.log(Math.max(4,6,9,2));//9

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);//added 1 so that if math.random gives 0.01 then *10= 0.1 which gives us 0 hence to avoid this condition of having 0 , we add +1

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
//Multiplying the result of Math.random() by (max - min + 1) scales the random number to a range between 0 (inclusive) and (max - min + 1) (exclusive).
//Adding min shifts the range from [0, max - min + 1) to [min, max + 1).

