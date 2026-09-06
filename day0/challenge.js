//Day 0: Variables & Conditions
//Level 1.


//1.Age Logger:
let age = (age) => {
  return age
}
console.log(`you are ${25} years old`); // executing the output using template leterals `${}`

//Temperature Check
let temperature = (degree,temp) =>{
  let check = degree < temp 
  
  ? "It's hot outside!" 
  :"The weather is nice."
  return check
}
console.log(temperature(30,29));

//Even or Odd
let evenOrOdd = (number) => {
  let is = number % 2 === 0
  ? "number is even"
  : "number is odd"
  return is
}
console.log(evenOrOdd(20));


//Level 2
// Grading System:
    const score = 83
    if (score >= 90 && score >=100){
        console.log(`A`)

    }else if (score >= 80 && score <= 89) { //if the first condition is false execute this
        console.log(`B`)

    }else if (score >=70 && score <= 79) {
        console.log(`C`)
    }else{
        console.log(`F`)
    }

//Max of Three:
const NUMBERS = [20,11,56];
const maxNumber = Math.max(...NUMBERS); //...spread operator to defined each number as a separated argument to the math.max
console.log(maxNumber)

//Leap Year Checker 366 DAYS one every 4years
const year = 2000
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`true`)
}else{
    console.log(`false`)
}

// Level 3
// 1 Basic Calculator:
const 
num1 = 13, // in division this is a numerator (number being divided)
num2 = 3, // and this called denominator ( number divided by)
operator = "/"; /*NOTE : type a single arithmetic operator inside the string " " to perform each cases */

//this function to avoid infinity erorre
function div(num1,num2) {
  if(num2 === 0 ) num2 = 1; 
  return num1 / num2;
}

// div function represents division arithmetic operator, with an if statement for handling division by 0 .
function calculator (num1, num2,operator) {
  switch(operator) {

    case "/" : 
    console.log(div(num1,num2)); // invoking div function,so no operator needed since it does exist in div funvtion above
    break
    /*NOTE : if you type / operater inside the console block it will drop an error with NaN
    because it counted as a single argument calling since two args needed to be calculated*/

    case "*" : console.log(num1 * num2);
    break

    case "-" : console.log(num1 - num2);
    break

    case "+" : console.log(num1 + num2);
    break

  }
}
calculator(num1 ,num2, operator);

//2 Valid Triangle
const
angle1 = 90,
angle2 = 30,
angle3 = 60;

function isValidTriangle(angle1,angle2,angle3) {

  if ((angle1 + angle2 + angle3 === 180 ) &&
  (angle1 > 0 && angle2 > 0 && angle3 > 0)) {

    console.log( "triangle is valid")

  }else {
    console.log("triangle is not valid")};
}
isValidTriangle(angle1,angle2,angle3);
//NOTE : If you're just using console.log() inside the function, don't put another console.log() around the function call

// 3 BMI Calculator: simple put BMI Calculator stands for Body Mass Index, 
// is a small program that calculates using a person's weight and height.

const
weight = 72,
height = 1.80
const bmi = weight / (height * height) //making bmi global to invoke it as an argument in console execution

function bmiCalculator() {

  if ( bmi < 18.5) {
    return `Underweight`;

  }else if ( bmi >= 18.5 && bmi < 24.9) {
    return `Normal`;

  }else if ( bmi >= 25) {
    return `Overweight`;
  }

}
console.log(`your bmi is ${bmi} counted as a ${bmiCalculator()} category`);