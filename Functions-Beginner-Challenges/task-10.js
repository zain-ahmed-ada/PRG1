/*
Challenge 10:
Create a function that takes two numbers and an operator as parameters. It
should return a print out of the sum e.g. “1 + 2 = 3” or “4 x 6 = 24”.
*/

const takeNumber = (num1, num2) => {
	return `${num1} + ${num2} = ${num1 + num2} or ${num1} x ${num2} = ${
		num1 * num2
	}`;
};

console.log(takeNumber(2, 2));
