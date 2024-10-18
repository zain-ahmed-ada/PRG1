/*
An employee’s weekly pay depends on the rate of pay
and the number of hours worked per week. Employees
work a minimum of 1 hour per week, and a maximum of
60. An employee who works more than 40 hours is paid
11⁄2 times the normal pay rate for all hours worked over
40. Normal pay is £12.00 per hour.

A program is required to calculate and output the
weekly pay for any employee.
*/

const readlineSync = require("readline-sync");

const hourlyRate = 12;
let extraHours = 0;
let hoursWorked = 0;
let totalPay = 0;

hoursWorked = readlineSync.questionInt("Enter number of hours worked this week (1-60): ");

if (hoursWorked > 1 && hoursWorked < 60) {
	extraHours = hoursWorked - 40;
	totalPay = 40 * hourlyRate + extraHours * (hourlyRate * 1.5);
} else {
	console.log("Error.");
}

console.log(`Your pay this week is £${totalPay}`);
