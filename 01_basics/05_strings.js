const name="kaushiki"//bts ye bhi object invoke krra
const repoCount=50
//console.log(name + repoCount + "Value");//old syntax

//console.log(`my name is ${name} and my repo count is ${repoCount}`);//modern times syntax

const str = new String('India')// invokes object

console.log(str[0]);//I
console.log(str.__proto__);//{}
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(3));
console.log(str.indexOf('a'));


const s = new String ('kaushiki');
console.log(s.substring(0,4)); //kaus

const s2 = new String ('kaushiki');
console.log(s2.slice(-8,2));//ka -- slice can include negative numbers also

const s3="     kaush   "
console.log(s3);
console.log(s3.trim());

const s4="kaushiki-is-the-best-yay-kaushiki"
console.log(s4.replace('kaushiki','rashi'));

console.log(s3.includes("rashi")); // false

console.log(s4.split('-'));






