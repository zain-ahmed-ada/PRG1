/* 
In 2023 the current population of the UK is
67,765,900. The current annual % increase is 0.3%.
Assuming that stays the same, what year will the
UK population reach 80,000,000? Write an
algorithm to output the projected yearly population
and stop when 80,000,000 is reached.
*/

let current_year = 2023;
let current_population = 67765900;

while (current_population <= 80000000) {
	current_population += current_population * 0.003;
	current_year += 1;
	console.log(`It will take until ${current_year} to reach ${current_population}`);
}
