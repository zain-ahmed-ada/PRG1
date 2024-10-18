/*
Create a program that allows the user to enter 3
numbers representing the height, width and length of a
cuboid. The program calculates and displays the volume
and total surface area of the cuboid.
*/

const readlineSync = require("readline-sync");

let height = readlineSync.questionInt("Enter height: ");
let width = readlineSync.questionInt("Enter width: ");
let length = readlineSync.questionInt("Enter length: ");

console.log(`Volume: ${height * width * length}`);
console.log(`Surface Area: ${2 * (length * width + width * length + length * height)}`);
