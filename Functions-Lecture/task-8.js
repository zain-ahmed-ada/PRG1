/*
A typical car can hold four passengers and one driver,
allowing five people to travel around. Given n number
of people, return how many cars are needed to seat
everyone comfortably?

Examples
carsNeeded(5) -> 1
carsNeeded(11) -> 3
carsNeeded(0) -> 0
*/

const carsNeeded = (number) => {
	let count = 0;
	if (number < 0) {
		return "Invalid number";
	}
	while (number >= 5) {
		number -= 5;
		count++;
	}
	if (number > 0) {
		count++;
	}
	return count;
};

console.log(carsNeeded(5));
console.log(carsNeeded(11));
console.log(carsNeeded(0));
