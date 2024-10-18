/*
Challenge 20:
Create a function that takes a string as a parameter and counts the number of
vowels in it and returns the result.
*/

const takeString = (string) => {
	let vowels = "aeiou";
	let vowelsCount = 0;

	for (let i = 0; i < string.length; i++) {
		if (vowels.indexOf(string[i]) !== -1) {
			vowelsCount++;
		}
	}
	return vowelsCount;
};
console.log(takeString("hello"));
