/*
Write an algorithm to calculate a dog's age in dog
years.
Note: For each of the first two years, a dog year is equal
to 10.5 human years. After that, each dog year equals 4
human years.

Expected Output:

Input a dog's age in human years: 15
The dog's age in dog's years is 73
*/

const readlineSync = require("readline-sync");

const firstTwoYearsConversion = 10.5;
const remainingYearsConversion = 4;

let humanYears = readlineSync.questionInt("Please enter dog age in human years: ");

let dogYears = 2 * firstTwoYearsConversion + (humanYears - 2) * remainingYearsConversion;

console.log(`The dog's age in dog years is ${dogYears}`);
