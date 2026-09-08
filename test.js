// items needed : for  i < > = >=   <=  +=  &&  ||  + - * / 
// !== === == ; i++, i-- 

console.log(`summation`+`-`.repeat(80)) //NOTE : ignore this line


let bigO = (n) => {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    count += i
    
  }
  return count
}
console.log(bigO(5));


let Summation = (n) => {
  return (n* (n+1)) /2
}
console.log(Summation(5));


// Fabonacci Sequence 0,1 by default then 0,1,1,2,3,5,8,13,21

// let palindromeCheck = (str) => {
//   for(let i = 0; i < str.length / 2;i++){
//     if(str[i] !== str[str.length - 1 - i]){
//       return ` ${str} is not palindrome`
//     }
//   }
//   return ` ${str} is a palindrome `
// }
// console.log(palindromeCheck(`youluoy`));



//to access to object by its index
let CAR = {
    brand : "mercedec",
    model : "G-Class",
    year  : 2024
}

console.log(Object.keys(CAR)[0]);


//to access by properties
let car = {
    brand : "mercedec",
    model : "G-Class",
    year  : 2024
}

console.log(car.brand);



//to access to an array of objects
const cars = [ 
    {brand : "mercedec", model : "G-class", year : 2024},
    {brand : "BMW"     , model : "X5"     , year : 2023 },
    {brand : "BMW"     , model : "X5"     , year : 2023 }
  ]

console.log(cars[0].brand); // mercedec


//to access to an object of objects
const CARS = { 
    car1 : {brand : "mercedec", model : "G-class", year : 2024},
    car2 :{brand : "BMW"     , model : "X5"     , year : 2023 }
 }
console.log(CARS.car2.brand);



// let str = "java"
// let char = "a"

let count = 0
let charCount = (str,char) => {
  for(let i = 1; i < str.length;i++){
    if( str[i] == char){
      count++
    }
  }
  return count
}
console.log(charCount("javaaa","a"));


//find how many times a number is detected
let numbers = [1,2,2,2,3,3]
let max = []
for(let i = 1; i < numbers.length; i++){
  if(numbers[i] > numbers){

  }
}






// areInStock = []
const product = [
    {name : "mouse",    price : 20, inStock : true},
    {name : "keyboard", price : 23, inStock : false},
    {name : "charge",   price : 20, inStock : true}
]

let returnedArr = []

let isInStock = () => {
    for(let i = 0; i < product.length;i++){
        if(product[i].inStock === true) {
            returnedArr += product[i].name + " "
        }
    }
    return returnedArr
}
console.log(isInStock());



arr = [
    {name : "hamza" , notes: [11,12,13]},
    {name : "ahmed" , notes: [11,12,13]},
    {name : "ilyas" , notes: [11,12,13]},
    {name : "ali"   , notes: [11,12,13]},
    
]

let sum = 0
let Average = (std) => {
    for(let note of std.notes){
        sum += note
    }
    return sum / arr.notes.length
}
console.log(Average());