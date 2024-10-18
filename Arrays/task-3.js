/*
Write a function that sums the total of an array of integers
that is passed in as an argument. The total should be
returned.
*/

const list = [2, 4, 6, 8, 10];

const sumArray = (list) => {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		sum += list[i];
	}
	return sum;
};

console.log(sumArray(list));
