
//for loop
//can execute a block of code a number of times.
const students = ["Hamza", "Morad", "youssef", "Ilyas"]
//stores the array length by len
const len = students.length //property dont have parentheses unlik method
//.length is a string property returns the number of code units in the string
let Name = "" // initializes an empty string to hold the result.

for (let i = 0; i < len; i++){
    Name += students[i] // i assigned a text to const and it drops an error
    //in use of += to avoid repetation like name = name + student[i] 
    //because this is a loop and in avery iteration has to change its value
    break
}
console.log(students)

// while loop
//While loops execute a block of code as long as a specified condition is true.
// meaning the loop body may not execute at all if the condition is initially false.
let count = 1
while (count <= 5) {
    console.log(count)
    count ++ //If you forget to increase the variable used in the condition, the loop will never end.
}
//output 1.2.3.4.5

//do while
//do while executed at least once even if the condition is false
//.do block runs at least once before the condition is checked.
let i = 1
do {
    console.log(i)
    i++
} while (i <= 5)


//nested loops

let Students = ["osama" , "hamza", "ilyas", "adil", "youssef"]
let campus = ["safi", "yousoufia", "nador"]
let year = [2027, 2026]

for (let i = 0; i < Students.length; i++) {
    console.log("-".repeat(20)); //this nothing unless to separate lines
    console.log(`------${Students[i]}`)
    console.log(`campus :`)

    if(Students[i] === "adil"){

        continue
    }
    
    for(let j = 0; j < campus.length ; j++){
        console.log(`- ${campus[j]}`)

    }
    console.log(`year :`)
    for(let n = 0; n < year.length; n++){
        console.log(`${year[n]}`)
    }
    
}
/* NOTE : since the main loop is for  Students other nested loops
will be executed with each of Students elements*/

// conditions with loops
for (let n = 0; n <= 9; n++) {
    console.log(`-`.repeat(10))
    if (n === 4){
        continue
    }
    if (n === 7){
        break
    }
    console.log(n)
}

