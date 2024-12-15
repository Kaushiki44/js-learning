// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

//during comparisons check that the values are of same data types

//console.log("2">1);// returns true bcz js converted str into num but sometimes the result is not predictable

//avoid the foll conversions

console.log((null>0));//f
console.log((null==0));//f
console.log((null>=0));//t
console.log((null<=0));//t
//comparisions treat null as 0 ie 1,3,4 are f,t,t
//eqaulity and comparision work differently

console.log(undefined==0);//f
console.log(undefined>0);//f
console.log(undefined<0);//f



//=== strict check checks data type also

console.log(2==="2");//f

