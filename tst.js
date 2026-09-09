// let isInStock = () => {
//     for(let i = 0; i < product.length;i++){
//         if(product[i].inStock === true) {
//             returnedArr += product[i].name + " "
//         }
//     }
//     return returnedArr
// }
// console.log(isInStock());


// couhnt string without .length

//for of

function forOfLength(str){
  let count = 0
  for(let string of str){
    count++
  }
  console.log(count);
  
}
forOfLength("hamza")

//for
function forLength(str) {
  count = 0
  for(let i = 0;str[i] !== undefined; i++){
    count++
  }
  console.log(count);
  
}
forLength("hamza")


// while
function whileLength(str) {
  let count = 0
  let i = 0
  while(str[i] !== undefined) {
    count++
    i++
    
  }
  console.log(count);
}
whileLength("hamza")


// do while

function doWhileLength(str) {
  let count = 0
  let i = 0
  do{
    count++
    i++
    
  }while(str[i] !== undefined) {

    console.log(count);
  }
  
}
doWhileLength("hamza")