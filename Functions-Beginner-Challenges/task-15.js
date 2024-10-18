/*
Challenge 15:
Create a function that takes two numbers as a parameters and returns the
larger of the two numbers.
*/

const takeNumber = (num1, num2) => {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};

console.log(takeNumber(1, 2));