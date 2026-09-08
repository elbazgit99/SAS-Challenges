/*Day 6: Search & Sort Algorithms
Level 1 

Linear Search Implementation:
*/

console.log(`1.Linear Search Implementation: `+`-`.repeat(80)) //NOTE : ignore this line

const arr = 
function LinearSearch(array, target) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return console.log(i);
            
        }
    }    
    return console.log(-1);
}
LinearSearch(arr,34)



// const arr = [1,2,3,4,5]
// function LinearSearch(array, target) {
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target[i]){
//             return console.log(i);
//                    }
//     }
//     return console.log(-1);
    
// }
// LinearSearch(arr,2)
