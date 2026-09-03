/* 
CONDITIONS
IDENTIFICATION :
- conditions in general is an expression, simply accepts two value either true or false.
- it commenlly refered to "decision making" in aspect of programming languages.
- there is about 6 conditions in js with  deffirent keywords in js, each behaves based on its use.
 CONDITIONS SYNTAX and EXAMPLES :
*/
//if :
let note1 = 12
if ( note1 > 10) {
    console.log("passed")
}// output would be passed since 12 is greater than 10

//if else
const note2 = 9;
if (note2 > 10){
    console.log("passed")
}else {
    console.log("failed")
}//output would be falied because 9 is less than 10


//Tenary operator has two expression symbols "?" symbols reffered to if its truthy and ":" refferse to otherwise or falsy
// and 
const NOTE = 10;
const RESULT = NOTE >= 12 ? "passed" : "failed"
console.log(RESULT)// output : passed

/*switch : is a series of cases selected based conditions usin case keyword,
and break keyword to specifie number of statements would be executed */

const Results = 12;
switch (Results) {
    case  9 :
    console.log("more focusing could help");
    break

    case 6 : 
    console.log("not even close")
    break
    
    case 12 :
    console.log("well done you made it")
    break
}

/*Booleans and Logical Operators: 
booleans is a primative data type, with one accepted value "true or false"
and logical operators are used to combain boolean expressions*/

const motivationExam = true
const technicalExam = false
console.log( motivationExam && technicalExam) //output false because of && operators should be bouth true
console.log( motivationExam || technicalExam) //output : true because of or must have one true
console.log( !motivationExam)// output : false because ! "NOT" operator seversed the value