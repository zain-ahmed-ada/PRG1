/*
Given a string, return a string where for every char in
the original, there are two chars.

doubleChar('The') → 'TThhee'
doubleChar('AAbb') → 'AAAAbbbb'
doubleChar('Hi-There') → 'HHii--TThheerree'
*/

const doubleChar = (word) => {
    let new_word = "";
	for (let i = 0; i < word.length; i++) {
		let temp = word[i] + word[i];
	    new_word = new_word + temp;
	}
	return new_word;
};

console.log(doubleChar("The"));
console.log(doubleChar("AAbb"));
console.log(doubleChar("Hi-There"));
