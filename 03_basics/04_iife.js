// IMMEDIATELY INVOKED FUNC EXPRESSIONS (IIFE)
//runs as soon as it is defined and to terminate it always use ;
//Avoids polluting the global variables
//syntax: (....)(); 
// ie function + execution


//NAMED IIFE
( function chai(){
    console.log(`DB CONNECTED`)
    //DB CONNECTED
}
) (); // ";" is necessary bcz the iife needs to know where to stop


//UNNAMED IIFE WITH PARAMETERS  arrow func also used 
( (name) =>{
    console.log(`DB CONNECTED TO ${name}`)
    //DB CONNECTED TO kaushiki
}) ('kaushiki');
