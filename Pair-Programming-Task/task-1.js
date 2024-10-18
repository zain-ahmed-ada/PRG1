/*
A program generates a random number between 1 and 100 and stores it.
Ask the user to guess for a number between 1 and 100.
If the number is correct, the user is congratulated!
If the number is not correct, the user is told that their guess was too high or too low.
The program keeps asking until the correct guess is entered and then outputs “Well
done!” and the number of guesses it took.

This line of code will produce a random number between 1 & 100. To do this it
generates a random number between 0 and 1, times it by 100, adds 1 and rounds
(floors) it down.
*/

const readLineSync = require("readline-sync");

let randNumber = Math.floor(Math.random() * 100 + 1);
console.log(randNumber);
let isCorrect = false;

while (isCorrect === false) {
	let userGuess = readLineSync.questionInt("Enter a number (1-100): ");
	if (userGuess === randNumber) {
		console.log("You guessed Correctly!");
		isCorrect = true;
	} else {
		console.log("Incorrect! Try again.");
	}
}
