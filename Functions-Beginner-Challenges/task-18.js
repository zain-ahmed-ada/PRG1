/*
Challenge 18:
Create a function that takes a number between 0 and 100 and returns a grade
based on this system "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F":
0-59%.
*/

const takeNumber = (number) => {
	if (number >= 90 && number <= 100) {
		return "A";
	} else if (number >= 80 && number <= 89) {
		return "B";
	} else if (number >= 70 && number <= 79) {
		return "C";
	} else if (number >= 60 && number <= 69) {
		return "D";
	} else {
		return "F";
	}
};

console.log(takeNumber(47));
