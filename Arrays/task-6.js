/*
Create a function called reverseArrayElements that
takes an array of strings as an argument. The function
should reverse the order of the array and return a new
array.

(Array methods slice() and reverse() can make this a
shorter, more concise function.)
*/

const list = ["zain", "alina", "zahra"];

const reverseArrayElements = (array) => {
	let temp = list.reverse();
	return temp;
};

console.log(reverseArrayElements(list));
