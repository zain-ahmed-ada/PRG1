/*
Define a function called highest. The function should accept three
parameters: a, b & c.

The purpose of the highest function is to output the highest number
passed into it.

The highest value should be held in a variable called highestNum.

Create user prompts that will ask for the three numbers. The responses
should be held in three variables.

You should add one call to your function with the appropriate
arguments.
*/

const readlineSync = require("readline-sync");

let num1 = readlineSync.questionInt("Enter a number: ");
let num2 = readlineSync.questionInt("Enter a number: ");
let num3 = readlineSync.questionInt("Enter a number: ");

const highest = (a, b, c) => {
	let highestNum = Math.max(num1, num2, num3);
	return highestNum;
};

console.log(`Highest Number: ${highest(num1, num2, num3)}`);
