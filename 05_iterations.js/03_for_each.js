// FOR EACH -- ARRAYS 

const coding=["js", "ruby", "java","python"]

coding.forEach(function(val){
    console.log(val)
} )
//js
// ruby
// java
// python

//OR -- USING ARROW FUNC
coding.forEach((item) => {
    console.log(item)
})

//OR - MAKING ANOTHER FUNC AND PASSING THAT FUNC's REFERENCE IN TO FOR EACH
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)// not printMe()-- we just have to pass the refernce not the execution

//OR
coding.forEach((items, indexs, arrs)=>{
    console.log(items, indexs, arrs)
})
//parameter ka order syntax is fixed chahe naam kuch bhi do
// js 0 [ 'js', 'ruby', 'java', 'python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python' ]
// java 2 [ 'js', 'ruby', 'java', 'python' ]
// python 3 [ 'js', 'ruby', 'java', 'python' ]


//ARRAY KE ANDAR OBJECTS

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName)
})
// javascript
// java
// python