/*
Write a program that takes an integer as input and
determines whether it's positive, negative, or zero.
You should use else if statements to test each
condition and print out a message indicating the
result.
*/

const readlineSync = require("readline-sync");

let userInput = readlineSync.questionInt("Enter a number: ");

if (userInput > 0) {
	console.log("Positive");
} else if (userInput < 0) {
	console.log("Negative");
} else if (userInput == 0) {
	console.log("Zero");
} else {
	console.log("Nothing");
}
