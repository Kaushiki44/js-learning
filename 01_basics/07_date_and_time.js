//dates

let myDate = new Date()
console.log(myDate);
//2024-12-22T07:03:12.148Z -> not usable

console.log(typeof myDate);
//object

console.log(myDate.toString());
//Sun Dec 22 2024 07:04:55 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
//Sun Dec 22 2024

console.log(myDate.toLocaleString());
//12/22/2024, 7:17:50 AM

console.log(myDate.toLocaleString('en-IN'));
//22/12/2024, 7:33:25 am  --> normal ddmmyyyy

console.log(myDate.toLocaleDateString());
//12/22/2024  --> mmddyyyy

const date2 = new Date(2004, 11, 24); // yyyymmdd -> 0 is jan so 11 is dec 
console.log(date2.toLocaleDateString()); //12/24/2004 -->mmddyyyy

const date3 = new Date("2024-01-15"); // MONTH AS 00 IS INVALID
console.log(date3.toLocaleString());
//1/15/2024, 12:00:00 AM

let myTime = Date.now()//gives current date in miliseconds


console.log(myTime);
console.log(Math.floor(myTime/1000))
// /1000 to get time in seconds instead of mili sec and floor to remove decimals

console.log(date3.getTime());
//returns milisec of the provided date from jan 1, 1970

let newDate = new Date()
console.log(newDate.getMonth())
//returns 11 ie dec
console.log(newDate.getMonth() + 1)
//12->dec
console.log(newDate.getDay())
//0 ->sunday
 

