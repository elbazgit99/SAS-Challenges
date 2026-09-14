/*Day 6: Search & Sort Algorithms
Level 1 

Linear Search Implementation:
*/

console.log(`1.Linear Search Implementation: `+`-`.repeat(30)) //NOTE : ignore this line


function LinearSearch(array, target) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
         console.log(i);
            
        }else{ -1  }

    }    
}
LinearSearch([1,70,34,20],34)


console.log(`2. Find Minimum Index: `+`-`.repeat(30)) //NOTE : ignore this line



function findMin(array) {

    for (let arr in array) {
        if (array[arr] === Math.min(...array)) {
            return arr
        }
    }
}

console.log(findMin([5, 2, 3,1,7]))

 
