/*
The computer’s favourite number is 7. Ask the user
to enter their name and their favourite number. The
computer will then greet the user by name and if
their favourite number is the same as the computer,
it will output a message saying “that’s my favourite
number as well”.
*/

const readlineSync = require("readline-sync");

let userName = readlineSync.question("Enter your name: ");
let userNumber = readlineSync.questionInt("Enter your favourite number: ");

const computerNumber = 7;

console.log(`Hello, ${userName}`);

if (userNumber === computerNumber) {
	console.log("That's my favourite number as well!");
} else {
	console.log("That's not my favourite number.");
}
