/*
Day 2: Functions & Arrow Functions

Level 1 
1. Greeting Function
*/
function greet(name) { // name as a parameters
    return `Hellow ${name}`
}
console.log(greet(`Hamza`)) // hamza as an argument

console.log(`-`.repeat(70)) // NOTE : ignore this line

//2. Arrow Addition:
const add = (a, b) =>{
    return `sum of add is ${a + b}`
    
   }
console.log(add(3, 2))


console.log(`-`.repeat(70)) // NOTE : ignore this line

// 3.Square Function:
const square = (num) => {
    return `square of num is ${num * num}`
}
console.log(square(2,2))

console.log(`-`.repeat(70)) // NOTE : ignore this line

/*
Level 2*
1.Temperature Converter
*/

const  celsiusToFahrenheit = (c) => {
    return `the converture of °C to Fahrenheit is  ${(c *9 / 5) + 32} °F`
}
console.log(celsiusToFahrenheit(37))

console.log(`-`.repeat(70)) // NOTE : ignore this line

/*
2.String Emptiness Check:*/

const isEMpty = (str) =>{
    if (str.trim() == 0 ) { // trim() to remove white spaces
        return `that's ${true} the string is empty`
    }else{
        return`${false} your string isn't empty`
    }
}
console.log(isEMpty(""))

console.log(`-`.repeat(70)) // NOTE : ignore this line


// String Emptiness using Tenary operator
const isEmpty = (str) =>
    str.trim() == 0
        ? `that's ${true} the string is empty`
        : `${false} your string is full`
    

console.log(isEmpty(" "))  


console.log(`-`.repeat(70)) // NOTE : ignore this line

// >>.trim() removes spaces of a string from bouth sides
//EX : 
let txt = "        hello" 
let removal = txt.trim()

console.log(removal)


console.log(`-`.repeat(70)) // NOTE : ignore this line

//3.Factorial Calculator:
let fctrl = 1
const factorial = (n) => {
    for (let i = 1; i <= n; i++ ) {

        fctrl *= i
    }
    console.log(fctrl)
}
factorial(6)

// 6! = 1*2*3*4*5*6 | 2 6 24  120 720

console.log(`-`.repeat(70)) // NOTE : ignore this line


/*
Level 3
Math Callback*/

const calculate = (a ,b ,operation) =>{
    return  operation(a, b)
}

let addition = (a, b) => {
    return a + b
}

let multiple = (a, b) => {
    return a * b
}

let subtraction = (a, b) =>{
    return a - b
}
console.log( calculate(500,500,addition))
                                                        console.log(`-`.repeat(70)) // NOTE : ignore this line
console.log(calculate(10,5,multiple))
                                                        console.log(`-`.repeat(70)) // NOTE : ignore this line
console.log(calculate(50,20,subtraction))
                                                        console.log(`-`.repeat(70)) // NOTE : ignore this line
// console.log(calculate(10,2,divition))
                                                        console.log(`-`.repeat(70)) // NOTE : ignore this line


console.log(`-`.repeat(70)) // NOTE : ignore this line








//compound assignment operators +=, -=, *=


