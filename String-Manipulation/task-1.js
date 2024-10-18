/*
Create and test a function called: isPalindrome
Your function should be implemented so that it expects a single string parameter and returns a boolean
(true or false) depending on whether the argument is or isn’t a palindrome (i.e. a word that reads the same
forward as backward). Examples include racecar, madam and 1221

isPalindrome (‘racecar’) -> true
isPalindrome (‘college’) -> false
Finished Early?
Create and test a convert function, it should expect a single parameter and return a copy of the passed
value with the start of each word (that was passed) has been converted to uppercase

convert (‘I came, I saw, I conquered’) -> I Came, I Saw, I Conquered
*/

const isPalindrome = (word) => {
	let reversed = word.split("").reverse().join("");
	return word === reversed;

	// My first version

	// let len = word.length - 1;
	// for (let i = 0; i < len; i++) {
	// 	if (word[i] === word[len]) {
	// 		i++;
	// 		len--;
	// 	} else {
	// 		return false;
	// 	}
	// 	return true;
	// }
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("college"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("1221"));
