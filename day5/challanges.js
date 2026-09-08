/*
Day 5: Objects & Arrays of Objects
Level 1

Car Object:*/
console.log(`Car Object`+`-`.repeat(80)); //NOTE : ignore this line

let CarObject = (brand,model,year) => {
  return  `this car is a ${brand} ${model} from ${year}` // template leterals is strict if you just adedd a block {} it drops error
}

console.log(CarObject("Mercedec","G-Class",2023));



// 2.Object Mutation
console.log(` 2.Object Mutation`+`-`.repeat(80)); //NOTE : ignore this line

let user = { 
  isActive : true,
   age : 23
}
function ObjectMutation (newAge)  {
  return  user.age = newAge
}

ObjectMutation(25); // assigning 25 to parameter newAge
console.log(user); // new age assigned //output { isActive: true, age: ' 25' }




//Key/Value Iteration:
console.log(` Key/Value iteration:`+`-`.repeat(80)); //NOTE : ignore this line

function keyValue () {
  let obj = {
    name : "hamza",
    age  : 20,
    year : 2023
  }

  for(let key  in obj) {
     console.log(key,obj[key])
  }
  
}
keyValue()

console.log(`Key/Value iteration:`+`-`.repeat(80)); //NOTE : ignore this line 
//using return


function key_value () {
  let obj = {
    name : "hamza",
    age  : 20,
    year : 2023
  }
  let properties = ""
  for(let key in obj){
      properties += [key,obj[key]] + "\n" // \n means new line
    }
    return properties
}
console.log(key_value()); "\n"


//Level 2
//1.Oldest Person:
console.log(`Oldest Person:`+`-`.repeat(80)); //NOTE : ignore this line 


function OldestPerson () {
  const person = [
    {name : "morad", age : 22},
    {name : "ilyas", age : 28},
    {name : "ali"  , age : 25},
  ]
  let oldest = person[0]
  for(let value of person){
    if(value.age > oldest.age){
      oldest = value
    }
  }
  console.log(oldest.name);
}
OldestPerson()

// NOTE : for in executes the array by its key/indexs / for of by its value



// 2.In-Stock Filter: 
console.log(`In-Stock Filter:`+`-`.repeat(80)); //NOTE : ignore this line 


function isInStock() {
  const product = [
    {name : "mouse" , price : 22, inStock : true},
    {name : "RAM", price : 28, inStock : true},
    {name : "GPU" , price : 25, inStock : false},
    {name : "CPU" , price : 70, inStock : false},
  ]
  let returnedArr = []
  for( let value of product){
    if(value.inStock === true){
      returnedArr += value.name + "\n"
    }
  }
  console.log(returnedArr);
  
}
isInStock()


//3 Cart Total
console.log(`Cart Total:`+`-`.repeat(80)); //NOTE : ignore this line 

function CartTotal() {
    const cart = [
    {item : "mouse", price : 10, quantity : 3},//30
    {item : "RAM"  , price : 30, quantity : 5},//150
    {item : "GPU"  , price : 25, quantity : 2},//50
    {item : "CPU"  , price : 20, quantity : 1},//20
  ]
  let total = 0
  for(let value of cart){
    total += value.price * value.quantity
  }
  console.log(total);
  
}
CartTotal()



// Level 3
//1. Group by Department
console.log(`1.Group by Department:`+`-`.repeat(80)); //NOTE : ignore this line 

function GrouByDepartment(){
   const employee = [
    {name : "hamza", salary : 10000, department : "Data"},
    {name : "adam" , salary : 30000, department : "Ai"},
    {name : "ali"  , salary : 25000, department : "Dev"},
    {name : "saad" , salary : 20000, department : "Dev"},
  ]

  let inDepartment = {}
  for( let value of employee){
    if(value.department === "Dev" ){
      inDepartment += value.name + '\n'
    }
  }
  console.log(inDepartment);
}
GrouByDepartment()
