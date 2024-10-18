/*
Write a program to keep asking for a number until
you enter a negative number. At the end, output the
sum of all entered numbers.
*/

let readlineSync = require("readline-sync");

let total = 0;
let userNumber;

do {
	userNumber = readlineSync.questionInt("Enter a number: ");
	total = total + userNumber;
} while (userNumber > 0);

console.log(total);
