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