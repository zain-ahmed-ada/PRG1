/* 
Ask the user which direction they want to count (up or down).
If they select up, then ask them for the top number
and then count from 1 to that number.
If they select down, ask them to enter a number
below 20 and then count down from 20
to that number. If they entered something other than
up or down, display the message “I don’t
understand”.
*/

let readlineSync = require("readline-sync");

let userInput = readlineSync.questionInt("Count up or down?: ");

if (userInput == "up") {
	let userNumber = readlineSync.questionInt("Enter a number: ");
	for (let i = 0; i <= userNumber; i++) {
		console.log(`${i}`);
	}
} else if (userInput == "down") {
	let userNumber = readlineSync.questionInt("Enter a number below 20: ");
	for (let i = userNumber; i > 0; i--) {
		console.log(`${i}`);
	}
} else {
	console.log(`I don't understand`);
}
