const readlineSync = require("readline-sync");

let age = readlineSync.questionInt("Enter your age: ");
let yearsInFuture = readlineSync.questionInt("How many years in the future?: ");
let currentYear = readlineSync.questionInt("What is the current year?: ");

let retirementAge = 67;
let newAge = age + yearsInFuture;

console.log(`In ${yearsInFuture} years, you will be ${newAge}.`);
console.log(`You can retire in ${retirementAge - age} years.`);
console.log(`The year will be ${currentYear + (retirementAge - age)}.`);
