/*
Challenge 14:
Create a function that takes two numbers as a parameters and returns the
smaller of the two numbers.
*/

const takeNumber = (num1, num2) => {
	if (num1 > num2) {
		return num2;
	} else {
		return num1;
	}
};

console.log(takeNumber(1, 2));
