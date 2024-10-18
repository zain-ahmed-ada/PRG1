/*
Write an algorithm to generate and print all 3-digit
numbers that equal the sum of the cubes of their
individual decimal digits.

e.g. 1^3 + 5^3 + 3^3 = 153 YES THIS IS. Left Side has to add up to right side
1^3 + 5^3 + 2^3 = 134 NO THIS ISN'T
*/

for (let i = 100; i <= 999; i++) {
	number = i.toString(); // "153"
	firstNumber = parseInt(number[0]); // 1
	secondNumber = parseInt(number[1]); // 5
	thirdNumber = parseInt(number[2]); // 3

	sum = firstNumber ** 3 + secondNumber ** 3 + thirdNumber ** 3;

	if (i == sum) {
		console.log(`YES THIS IS. ${i}`);
	} else {
		console.log(`NO IT ISN'T`);
	}
}
