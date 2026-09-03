/*
Day 1: Loops & Nested Loops
Level 1

1.While Loop Counting : 
*/
let count = 1;
while(count <= 20){
    console.log("-".repeat(5))
    console.log(count)
    count++
}

// 2.Sum of First 100 Numbers:

let Sum = 0 //as a starting 
for(let i = 1; i <=100; i++) {
    //before additioning sum with i here sum just holds the numbers from 1 to 100
    Sum += i; //add each number to sum
    //after this line sum is adding each number to each iteration : like 0 are the default  | 0 + 1 = 1 | 1 + 2 = 3 |  3 + 3 + 6 | 6 + 4 = 10 ... 
    
}
console.log(` Sum of first 100 numbers is ${Sum}`)


//3 Multiplication Table:
let num = 3
for(let i = 1,s = null; i <= 10; i++) {
    s = num * i

    console.log(s)
}

//Level 2
//1.FizzBuzz

for( let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`)
    }
    else if (i % 3 === 0){
        console.log(`Fizz`)
    }else if (i % 5 === 0) {
        console.log(`Buzz`)
    }else {
        console.log(i)
    }
};

//2.Count Vowels (Loop)
let Name = "hamza"
let Count = 0
for (let i = 0; i < Name.length; i++ ){
    if( Name[i] === "a" || Name[i] === "e" || Name[i] === "i" || Name[i] === "o" || Name[i] === "u" ) {
        Count++
    }
}
console.log(Count)


// 3.Square of Stars
//using repeat method
let n = 5;
for (let i = 0; i <= n; i++) {
    console.log("* ".repeat(n)) /*previosly whe were using repeat method to execute a string character a 
*/
}
//using nested loop

for (let i = 0; i < 5; i++) {
    let astri = "";
    for (let j = 0; j < 5; j++) {
        astri += "*";
    }
    console.log(astri);
}   
//Level 3 
//1 Prime Numbers

for (let i = 2; i <= 50; i++ ) {
    let prime = true;
    for (let j = 2; j * j <= i; j++ ){
        if(i % j === 0 ) { //handling numbers divided by 0
            prime = false
            break
        }
    }
    
    prime ? console.log(i) : ""  //using tenary operator
    console.log("-".repeat(10))// using - character can visualize the place of numbers that arn't prime in console
}

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