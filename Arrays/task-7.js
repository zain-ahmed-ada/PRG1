/*
Create an array of possible weapons.

In a variable called ‘zombieWeakness’ randomly store the name of one of the weapons from
the list.

Output messages telling the user that they have encountered a zombie and should prepare to
fight.

Output the array of weapons to the user.

Ask them to select one from the array.

If the weapon picked matches the zombieWeakness, output a message telling the user that
they have won the fight. Otherwise output a message saying that they have lost.

Once you have the basic game working, use your creativity to extend the functionality of the
game. You could add more than one life for example, or multiple enemies (that the game
randomly chooses from), or hit points, or all of these things.
*/

const readlineSync = require("readline-sync");

list = ["Sword", "Knife", "Katana", "Pistol"];

let zombieWeakness = "Katana";

console.log("You have encountered a zombie and should prepare to fight.");
console.log(`Pick one of these weapons to fight with: ${list}`);

userInput = readlineSync.question("Choose a weapon: ");

if (userInput === "Katana") {
	console.log("You have won the fight.");
} else {
	console.log("You have lost the fight.");
}
