/* 
CONST :
IDENTIFICATION :
-const is a keyword in js introduced in ES6
-const  is a block scope
-variables declared with const cannot be redeclared in the same scope
-variables declared with const cannot be redeclared and can't be Reassigned in the same scope
*/

//EXAMPLES :
const hamza = 26;
hamza = 27  //output : will drop an Error because const can't be Reassigned in the same scope
const hamza = 28/* NOTE : in this case the output would be an error 
because const is a block scope variable and can't be redeclared in the same scope*/

function constTest1() {
    const hamza = 27;
}

function constTest2() {
    const hamza = 27;
}
/*
NOTE : in this case with two deffirence functions (constTest1 and constTest2)
const can be redeclard and reassigned because bouth defined as separated scops.
*/