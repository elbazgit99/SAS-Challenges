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
