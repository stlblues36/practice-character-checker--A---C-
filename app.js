const readlineSync = require('readline-sync');
let name = readlineSync.question("What is your name: "); 
let index = readlineSync.questionInt("Enter a character index to access: "); 
 let firstChar = name[index];
console.log("Your answer is " + firstChar);
