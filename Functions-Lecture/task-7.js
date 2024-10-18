/*
Write a function to check if a number is prime or not.
Prime numbers are special numbers, greater than 1, that
have exactly two factors, themselves and 1.
*/

const isPrime = (number) => {
	if (number <= 1) {
		return "Not a Prime Number";
	} else {
		for (let i = 2; i <= Math.sqrt(number); i++) {
			if (number % i !== 0) {
				return "Prime Number";
			} else {
				return "Not a Prime Number";
			}
		}
	}
};

console.log(isPrime(5));
