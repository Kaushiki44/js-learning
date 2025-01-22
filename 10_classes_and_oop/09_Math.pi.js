// Object.getOwnPropertyDescriptor() is a method in JavaScript that returns a property descriptor for a specific property on an object. A property descriptor provides detailed information about a property, such as whether it is writable, enumerable, and configurable.

// writable
// Defines whether the value of a property can be changed.

// enumerable
// Defines whether the property shows up in loops like for...in or Object.keys().

// configurable
// Defines whether the property descriptor itself(including attributes like writable and enumerable)  can be changed and whether the property can be deleted.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descriptor);
// {
//     value: 3141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//since "writable: false" and "configurable: false" , hence we cant change the value of math.pi

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai ni bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


// Object.defineProperty() is a method in JavaScript that allows you to define or modify a property directly on an object, with precise control over the property’s attributes. It gives you more flexibility than simply adding properties to an object using the dot notation or bracket notation.

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   }

//ideally, we dont use for of with objects 
// for...of: This loop works with iterables, not directly with object properties.
// for...of works on arrays, maps, sets, strings, etc., and is not affected by enumerable when iterating over objects unless you convert the object’s keys into an iterable using Object.keys(), Object.entries(), or Object.values().

for(let [key, value] of Object.entries(chai)){
    if (typeof value!== 'function'){
        console.log(`${key} :  ${value}`)
    }
}
// name :  ginger chai
// price :  250
// isAvailable :  true