/*
Create an initial array of two foods, stored as strings.

Ask the user to input their favourite. Add this to the end of
the list and output it.
*/

const readlineSync = require("readline-sync");

const foods = ["Smashed Burgers", "Pizza", "Spaghetti", "Hotdogs"];

let userInput = readlineSync.question("What is your favourite food?: ");

foods.push(userInput);

console.log(foods);
