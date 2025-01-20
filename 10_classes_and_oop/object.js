// js has a prototypal behaviour  
// agar koi cheez ni mil ri hai to usko js aur upar layers me jaake search krti h like parents , grandparents etc jab tak null na mil jae
// this, new, classes sab iske thru hi kaam krte

// js me har ek cheez OBJECT hai
// and jo properties obj ke pas h vo hi arr aur str ke pas bhi h
// ARRAY-> OBJECT -> NULL
// STRING-> OBJECT -> NULL
// FUNCTION-> OBJECT -> NULL

//func , func bhi hai aur obj bhi hai

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2
//since func is also an object in the end, so yha pe using '.' we have given a property to an object

console.log(multiplyBy5(5))//25
console.log(multiplyBy5.power)//2
console.log(multiplyBy5.prototype);//{}
