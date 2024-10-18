/*
Flip the Boolean
Create a function that reverses a boolean value and
returns the string
"boolean expected" if another variable type is given.

Examples
flip(True) ➞ False
flip(False) ➞ True
flip(0) ➞ "boolean expected"
flip(None) ➞ "boolean expected"
*/

const flip = (value) => {
	if (value === "True") {
		return (value = "False");
	} else if (value === "False") {
		return (value = "True");
	} else {
		return "boolean expected";
	}
};

console.log(flip("True"));
console.log(flip("False"));
console.log(flip("0"));
console.log(flip("None"));

