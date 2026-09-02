

//2 Right-Angled Triangle
let stars = 5; //the triangle will ended up with 5 stars at the buttom, also means outer loop will run 5 times
for (let i = 1; i <= stars; i++) {
  let lines = ""; // creating an empty string in each iteration 

  for(let j = 1; j <= i; j++) { 
    lines += "*" // increasing number of stars each iteration
  }
  console.log(lines)
}



//we could see the outer loop managing lines, well the inner loop have to add the amount of stars needed in each line
//let try to reverse the loop so we get an left-angle Triangle with 5 stars at the top
console.log(`-----triangle 2`)
let Stars = 5
for (let i = stars; i >= 1; i--) {

  let Lines = "";
  for(let j = 1; j <= i; j++) {
    Lines += "*"
  }
  console.log(Lines)
}

//3.Fibonacci Sequence
// in simple put fabonacci sequince is the next number = the previous number + the number before it
let number1 = 0 , number2 = 1, sum = "", str = "0,1" ;
for(let i = 2 ; i < 10; i++){
  sum = number1 + number2; 
  str +=  ", " + sum;
  number1 = number2;
  number2 = sum;
}
console.log(str);
//