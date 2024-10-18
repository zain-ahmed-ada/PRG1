/*
Use a loop to print the numbers between 1 and 1000
that are divisible by 3 and 4.
*/

for (let i = 0; i < 1000; i++) {
	if (i % 3 == 0 && i % 4 == 0) {
		console.log(i);
	}
}
