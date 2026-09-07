/* 
Day 3: Strings, String Functions
Level 1 
Length & Uppercase:*/
console.log(`Length & Uppercase:`+`-`.repeat(80)); //NOTE : ignore this line

let stringToUpper = (str) => {
  let length = str.length
  let upper = str.toUpperCase()
  
  return [length,upper] //to return two values
}

console.log(stringToUpper("youcode"));


console.log(`First & Last Char:`+`-`.repeat(80)); //NOTE : ignore this line
//2.First & Last Char

let firstAndLastChar = (str) => {
  let first = str[0]  //accessing to a string by index since the rule says string is an array of characters in js
  let last = str[str.length-1] // last character
  return [first,last]
}
console.log(firstAndLastChar("youcode"))

console.log(`Word Replacer:`+`-`.repeat(80)); //NOTE : ignore this line
//3. Word Replacer:

let WorldReplace = (sentence,old,New) => {
  let replacer = sentence.replace(old,New)
  return replacer
}
console.log(WorldReplace("i love apples","apples","bananas"));


console.log(`Palindrome Check:`+`-`.repeat(80)); //NOTE : ignore this line
//Level 2
//1. Palindrome Check: 
let palindromeCheck = (str) => {
  for(let i = 0; i < str.length / 2;i++){
    if(str[i] !== str[str.length - 1 - i]){
      return ` ${str} is not palindrame`
    }
  }
  return ` ${str} is a palindrame `
}
console.log(palindromeCheck("youluoy"));


console.log(`String Reversal`+`-`.repeat(80)); //NOTE : ignore this line
//2.String Reversal:
let reverseString = (str) => {

  let result = ""; //this is the box for stpring 

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("youcode"))



console.log(`Character Counter:`+`-`.repeat(80)); //NOTE : ignore this line
//3. Character Counter
let countChar = (str, char) => {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    if(str[i] == char){
      count++
    }
  }
  return count
}
console.log(countChar("youcode","e"));


//Level 3 
console.log(` Capitalize Words:`+`-`.repeat(80)); //NOTE : ignore this line
// 1.Capitalize Words:

let CapitalizeWords = (sentence) => {
  let word = ""
  for(let i = 0; i < sentence.length; i++) {
    i == 0 || sentence[i -1] == " " // if the next character is a space Upper the next char
    ? word += sentence[i].toUpperCase()
    : word += sentence[i]

    } 
    return word
  }
console.log(CapitalizeWords("you code"));


console.log(` String Compressor:`+`-`.repeat(80)); //NOTE : ignore this line
// 2.String Compressor:

let StringCompressor = (str) => {
  let compresed = ""
  let count = 1
  for(let i = 0; i < str.length;i++) {
    str[i] === str[i + 1]
    ? count++
    :(compresed += str[i] + count ,count = 1)
  }
  return compresed
}
console.log(StringCompressor("aaaabbbcc"));


console.log(` String Compressor:`+`-`.repeat(80)); //NOTE : ignore this line
// 3.Anagram Checker:

let AnagramChecker = (str1,str2) => {
  if(str1.length !== str2.length){
    return false
  }
  let count = 0;
  for(let i = 0; i < str1.length; i++){
    for(let j = 0; j < str2.length; j++){
      if(str1[i] === str2[j]) {
        count++
        break
      }
    }
  }
  return count === str1.length
}
console.log(AnagramChecker("pool","loop"));
