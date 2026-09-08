/*
Day 5: Objects & Arrays of Objects
Level 1 

1.Car Object: */
console.log(`Car Object: `+`-`.repeat(80)); //NOTE : ignore this line


const car = {
    brand : "mercedec",
    model : "G-Class",
    year  : 2024
}

console.log(`this car is  ${car.brand} ${car.model}`);


console.log(`2.Object Mutation:`+`-`.repeat(80)); //NOTE : ignore this line
//2.Object Mutation: 
const user = {
    isActive : true,
    age : 21
}
user.age = 23
console.log(user.age);


console.log(`3.Key/Value Iteration:`+`-`.repeat(80)); //NOTE : ignore this line
//3.Key/Value Iteration:
let obj =  {
    brand : "mercedec",
    model : "G-Class",
    year  : 2024
}

for (const key in obj) {
    (`Key: ${key}, Value: ${obj[key]}`);
}
console.log(obj);


// Level 2
console.log(`Oldest Person:`+`-`.repeat(80)); //NOTE : ignore this line
// 1.Oldest Person:
const person = [
    {name : "hamza", age : 20},
    {name : "ilyas", age : 21},
    {name : "khalid", age : 25},
]

let isOld = 0
let OldestPerson = () => {
    for(let i = 1; i < person.length; i++){
        if(person[i].age < isOld.age){
            isOld += person[i].name + " "
        }
        
    }
    return isOld
}
console.log(OldestPerson());




console.log(`In-Stock Filter:`+`-`.repeat(80)); //NOTE : ignore this line
//2. In-Stock Filter:
// areInStock = []
const product = [
    {name : "mouse",    price : 20, inStock : true},
    {name : "keyboard", price : 23, inStock : false},
    {name : "charge",   price : 20, inStock : true}
]

let returnedArr = []
let isInStock = () => {
    for(let i = 0; i < product.length;i++){
        if(product[i].inStock == true) {
            returnedArr += product[i].name + " "
        }
    }
    return returnedArr
}
console.log(isInStock());


 