var d=40
if(true){
    let a=10
    const b= 20
    var c=30
    d=90
}
//console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c); // 30 
//var apne scope ke bahar bhi kam krta h isilie ni use krte use
console.log(d); //90 --> dikkat


//+++++++++++ INTERESTING

console.log(addone(5)) // 6

function addone(num){
    return num+1
}


addTwo(5)// gives ERROR --expression cant be called before the actual expression

//this is a function but it is also called EXPRESSION 
const addTwo = function(num){
    return num+2
}