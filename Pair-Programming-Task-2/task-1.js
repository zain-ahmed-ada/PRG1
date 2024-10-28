/*
You have been tasked with creating a simple password strength checker program.
The program should take a user's input for a password and then evaluate its
strength based on the following criteria:
The password must be at least 8 characters long.
The password must contain at least one uppercase letter.
The password must contain at least one lowercase letter.
The password must contain at least one digit (0-9).
The password may contain special characters (e.g., !, @, #, $, etc.).
*/

const MINIMUM_LENGTH_PATTERN = /.{8,}/;
const UPPERCASE_PATTERN = /[A-Z]/;
const LOWERCASE_PATTERN = /[a-z]/;
const DIGIT_PATTERN = /[0-9]/;
const SPECIAL_CHARACTER_PATTERN = /[!@#$%^&*(),.?":{}|<>]/;

const checkPassword = (password) => {
	if (
		MINIMUM_LENGTH_PATTERN.test(password) &&
		UPPERCASE_PATTERN.test(password) &&
		LOWERCASE_PATTERN.test(password) &&
		DIGIT_PATTERN.test(password) &&
		SPECIAL_CHARACTER_PATTERN.test(password)
	) {
		return "Strong";
	} else if (
		MINIMUM_LENGTH_PATTERN.test(password) &&
		UPPERCASE_PATTERN.test(password) &&
		LOWERCASE_PATTERN.test(password) &&
		DIGIT_PATTERN.test(password)
	) {
		return "Medium";
	} else {
		return "Weak, enter another password.";
	}
};

//console.log(checkPassword("password"));
console.log(checkPassword("Sputnikkkkkkk12"));
