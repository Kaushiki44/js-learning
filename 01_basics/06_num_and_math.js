const score = 400
console.log(score);
 //400
const balance = new Number(100)
console.log(balance);  //[Number: 100]

console.log(balance.toString().length); //3
console.log(typeof(balance.toFixed(2)));//100.00

const no = 123.56
console.log(no.toPrecision(4));
//123.6
console.log(no.toPrecision(3));//124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000

const numObj = new Number(10);
console.log(typeof numObj); // object