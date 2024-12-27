const coding=[ "js", "ruby", "java", "python", "cpp"]

const values= coding.forEach((item) => {
    console.log(item);
    return item;//FOR EACH KABHI RETURN NI KRTA
})

console.log(values);
//FOR EACH KABHI RETURN NI KRTA-- TABHI LAST ME UNDEFINED ARA WHEN WE'RE TRYING TO PRINT VALUES
// js
// ruby
// java
// python
// cpp
// undefined 


//USING FILTER: creates a new array containing all the elements of an existing array that pass a specific condition (callback function)

const num= [1,2,3,4,5,6,7,8]

const newNums= num.filter((n) => n>4)
//or
// const newNums= num.filter((n) => {
//     return n>4
// })

console.log(newNums) //[ 5, 6, 7, 8 ]



//OR - DOING THE SAME OPERATION USING FOR EACH
const no=[]

num.forEach( (n) =>{
    if(n>4){
        no.push(n)
    }
})
console.log(no)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks= books.filter((bk) => bk.genre === 'History')

//   console.log(userBooks)
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

userBooks= books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks)