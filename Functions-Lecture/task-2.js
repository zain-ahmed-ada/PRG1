/*
Define a function called averageValue. It should have four parameters: a,
b, c & d.

The purpose of the function is to calculate the average of four numbers
and output it.
Create a variable called average and assign it to an expression that will
calculate the average of the four values passed through the parameters.

Create user prompts that will ask for the four numbers. The responses
should be held in four variables: num1, num2, num3, num4.

You should add one call to your function, with the arguments num1,
num2, num3 and num4.
*/

const readlineSync = require("readline-sync");

let num1 = readlineSync.questionInt("Enter a number: ");
let num2 = readlineSync.questionInt("Enter a number: ");
let num3 = readlineSync.questionInt("Enter a number: ");
let num4 = readlineSync.questionInt("Enter a number: ");

const averageValue = (a, b, c, d) => {
	let average = (num1 + num2 + num3 + num4) / 4;
	return average;
};

console.log(`The average is: ${averageValue(num1, num2, num3, num4)}`);
