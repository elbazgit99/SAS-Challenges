/* 
let :

IDENTIFICATION :
-let is a keyword in js introduced in ES6
-let is a block scope
-variables declared with let cannot be redeclared in the same scope
*/

//EXAMPLES :
let hamza = 26;
hamza = 27
console.log(hamza); //output : 27 because let can be rereassigned to new value at the same scope.
let hamza = 28; /*NOTE : in this case the output would be an error 
because let is a block scope variable and can't be redeclared in the same scope*/

function letTest1() {
    let hamza = 22;
}

function letTest2() {
    let hamza = 22;
}
/*
NOTE : in this case waith two deffirent functions (letTest1 and letTest2)
let can be redeclard and reassigned because bouth defined as separated scops
*/