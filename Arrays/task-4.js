/*
Create a function that takes an array of numbers as an
argument and prints out each number in the array
multiplied by 2.
*/

const list = [1, 2, 3, 4, 5];

const multipliedBy2 = (list) => {
	let temp;
	for (let i = 0; i < list.length; i++) {
		temp = list[i] * 2;
		console.log(temp);
	}
};

console.log(multipliedBy2(list));
