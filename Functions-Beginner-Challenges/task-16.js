/*
Challenge 16:
Create a function that takes a number as a parameter and checks if it is even.
*/

const takeNumber = (number) => {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(takeNumber(4));
