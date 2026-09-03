// JavaScript Challenges — Functions, loops and callbacks
//Challenge 1 — Show even numbers
let n = 10
function isEven() {
    for (let i = 1; i <= n; i++) {
         if ( 2 % n  === 0) {
            n =+ i
         }  
    }
    return n
}
console.log(isEven(8))

//Challenge 2 — Count even results

function countEven(nbr1, nbr2) {
    for (let i = 1; i <= nbr1 || nbr2; i++){
        nbr1 += nbr2
    }

}

console.log(1,20)
