/*
Write a function that takes an integer as a parameter
and returns the difference between the integer’s cube
and its square.
*/

const takesInt = (number) => {
	return number ** 3 - number ** 2;
};

console.log(takesInt(5));
