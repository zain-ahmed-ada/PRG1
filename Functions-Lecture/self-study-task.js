/*
In your practice CodeSpace, could you write your own function that takes two arguments and returns their minimum?
*/

const min = (arg1, arg2) => {
	if (arg1 > arg2) {
		return arg2;
	} else {
		return arg1;
	}
};

console.log(min(0, 10));
console.log(min(0, -10));
