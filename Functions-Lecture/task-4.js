/*
Write a function that takes in a sentence entered by
the user and returns the number of characters in the
sentence, excluding spaces.
*/

const readLineSync = require("readline-sync");

let sentence = readLineSync.question("Enter a sentence: ");

const sentenceFunc = (sentence) => {
	return sentence.replaceAll(" ", "").length;
};

console.log(sentenceFunc(sentence));
