//REDUCE: used to apply a function to each element of an array and accumulate the result into a single value
 const num = [1,2,3]

const total = num.reduce(function(accumulator, curr_val)
{
    console.log(`acc: ${accumulator} and current value: ${curr_val}`);
    return accumulator+curr_val
} ,0)  
// 0 is the initial value of accumulator
//then acc= acc+curr_val
//& curr_val is the num[i]

console.log(total);//6



//OR writing the same code in short

const tot= num.reduce( (acc, curr) => acc+curr , 0)
console.log(tot) //6



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(totalPrice) //22996