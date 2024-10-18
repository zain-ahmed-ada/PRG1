/*
Create a function called capitaliseArrayElements
that takes an array of strings as an argument. The function
should capitalise each element of the array and return a
new array with all elements capitalized.

(You can use the toUpperCase() method to carry out the
capitalisation!)
*/

const list = ["zain", "alina", "zahra"];

const capitaliseArrayElements = list.map((element) => {
	return element.toUpperCase();
});

console.log(capitaliseArrayElements);
