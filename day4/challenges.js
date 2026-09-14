/*
Day 4: Tables (Arrays), 2D Tables
Level 1 
Array Basics:
*/
//you must use methods that return an array
//using .push() to add element at the end & .shift() to remove the last
// shift()
console.log(`1. add Last Remove First`+`.`.repeat(30)) //NOTE : ignore this line
const addLastRemoveFirst = (colors, element) => {
  
  colors.push(element)
  colors.shift()
  console.log(colors);
}

addLastRemoveFirst(["red", "blue", "white"],"yellow")


console.log(`2. Array Sum            `+`.`.repeat(30)) //NOTE : ignore this line

function arraySum(nums) {
  let count = 0
    for(let num of nums){
      count += num
    }
    console.log(count);
    
}
arraySum([2,4,6,8,10])

console.log(`3. Element Existence:    `+`.`.repeat(30)) //NOTE : ignore this line

function DoesExist(array, value) {
    for(let arr of array){
      
      arr == value

      ? console.log(true)
      : console.log(false);
      
    }
    return 
}
console.log(DoesExist([1,2,3,4],4))



// Level 2
console.log(`1. Find Maximum:     `+`.`.repeat(30)) //NOTE : ignore this line

function findMax(array){
  let max = array[0]
  for(let arr of array){
  if (arr > max){

      max = arr
    }
  }
  console.log(max)
}
findMax([10,20,30,40,50])



console.log(`2. Remove Duplicates:      `+`.`.repeat(30)) //NOTE : ignore this line

function removeDuplicates(array) {
  let newArr = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      newArr.push(array[i])
    }
  }
  console.log(newArr)
}
removeDuplicates([20,20,20,50,50,30,30])


console.log(`3. Custom Reverse:      `+`.`.repeat(30)) //NOTE : ignore this line


function ReversArr(array) {
  let newArr = []
  for(let i = array.length  -1;i >= 0; i--){
      newArr.push(array[i])
    
  }
  console.log(newArr);
  
}
ReversArr([1,2,3,4,5])


// Level 3

console.log(`1. Flatten 2D Array      `+`.`.repeat(30)) //NOTE : ignore this line

function flatten2DArray(array){
  newArr = []
  for( let i = 0; i < array.length; i++ ){
    for( let j = 0; j < array[i].length; j++){
          newArr.push(array[i][j])
    }
  }
  console.log(newArr)
  
}
flatten2DArray([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])


console.log(`2. Diagonal Sum:     `+`.`.repeat(30)) //NOTE : ignore this line

function diagonalSum(arr) {
  let sum = 0

    sum = arr[0][0] + arr[1][1] + arr[2][2]
    

  console.log(sum);
  
}

diagonalSum([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])

console.log(`3. Matrix Transposition:     `+`.`.repeat(30)) //NOTE : ignore this line

function transpose(arr) {
    let swaps = []
    for (let i = 0; i < arr[0].length; i++) {
        swaps[i] = []

        for (let j = 0; j < arr.length; j++) {
            swaps[i][j] = arr[j][i];
        }
    }
    return swaps
}


console.log(transpose([
    [1, 2, 3],
    [4, 5, 6]
]));