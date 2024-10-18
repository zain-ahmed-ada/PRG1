/*
Challenge 13:
Create a function that takes two numbers as a parameters and checks if they are
equal.
*/

const takeNumber = (num1, num2) => {
	if (num1 === num2) {
		return true;
	} else {
		return false;
	}
};

console.log(takeNumber(1, 1));
