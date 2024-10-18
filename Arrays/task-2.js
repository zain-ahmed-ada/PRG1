/*
Ask the user to enter the names of three people they want
to invite to a party and store them in a an array. After they
have entered all three names, ask them if they want to add
another.

If they do, allow them to add more names until they
answer ‘no’. When they answer ‘no’ , then display how
many people they have invited to the party.
*/

const readlineSync = require("readline-sync");

const names = [];
check = false;

while (check === false) {
	let count = 0;
	if (count < 3) {
		let userInput = readlineSync.question("Enter the name of someone you want to invite to the list: ");
		names.push(userInput);
		count += 1;
	} else {
		let userChoice = readlineSync.question("Would you like to add more names?: ");
		if (userChoice === "no") {
			check = true;
		} else {
			let userInput = readlineSync.question("Enter the name of someone you want to invite to the list: ");
			names.push(userInput);
		}
	}
}

console.log(names);
