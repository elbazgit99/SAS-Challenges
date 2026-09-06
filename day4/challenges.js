/*
Day 4: Tables (Arrays), 2D Tables
Level 1 
Array Basics:
*/
//you must use methods that return an array
//using .push() to add element at the end & .shift() to remove the last
// shift()
console.log(`addLastRemoveFirst`+`-`.repeat(80)) //NOTE : ignore this line
const addLastRemoveFirst = (colors, element) => {
  
  colors.push(element)
  colors.shift()
  return colors
}
let colors = ["red", "blue", "white"];
let result = addLastRemoveFirst(colors,"yellow")
console.log(result);

console.log(`ArrSum`+`-`.repeat(80)) //NOTE : ignore this line

// 2. Array Sum
// let nums = [0, 1, 2, 3, 4]
// function ArrSum (sum) {
//   for(let i = 0; i <= nums.length; i++) {
    
//   }
// }

