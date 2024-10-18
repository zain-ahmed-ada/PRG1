/*
Challenge 12:
Create a function that takes two numbers as a parameters and checks if the first
one is less than the second one.
*/

const takeNumber = (num1, num2) => {
	if (num1 < num2) {
		return true;
	} else {
		return false;
	}
};

console.log(takeNumber(1, 2));
