/*
CSD 122 Javascript Bonus Assignment 3

Author: Tammy Hansen

Problem
Create a function that converts a decimal number with a fractional part from the decimal system (Base 10) to Base 2 (binary).  
The function should accept a decimal number with a fractional part and return the binary representation of the decimal value. 
Using a built-in Javascript function such as parseFloat() will result in zero extra credit.
The function definition:
public static String convertBase10ToBase2(number num) {
  // your code is here
}

Test cases:
1. 0.375 => 0.011

Tip:
3/8 = 0.375 = 3*10^-1 + 7*10^-2 + 5*10^-3
So if we multiply by a power of 2 big enough to
convert into a whole number, can then convert to
binary, and then divide by the same power of 2
0.375 * (2**3) = 3 (decimal)
Convert 3 to binary (now 11)
Divide by 2**3 (shift right) to get 0.011 (binary)
*/

function convertBase10ToBase2(num) {
   
	// create a flag for whether whole number true or not. Initialize to false.
	let whole = false;

	// next, check whether input is already a whole number
	if (num % 1 == 0) {
			// set flag to true
			whole = true;
	}

	// don't need an else here since flag is initialized to false

	// create another variable to manipulate instead of input parameter
	let newNum = num;

	// count the powers of 2 being used to make it whole number 
	let count = 0;

	// looping while flag is false
	while (!whole) {
			newNum *= 2;
			count++;

			// check the new number if it's whole yet
			if (newNum % 1 == 0) {
					// set flag to true
					whole = true;
			}

			// if it's false, the while will loop again

	}

	// after the while loop, newNum should be a whole number

	// now convert the base-10 to base-2

	// first will build the base-2 as a string
	let newStr = '';

	while (newNum > 0) {

			// test whether it is evenly divisible by 2, and concatenate remainder with new string
			if (newNum % 2 == 0) {

					// add the '0' or '1' to the left of the string!
					newStr = '0'+newStr;
			}
			else {
					newStr = '1'+newStr;
			}

			// divide newNum by 2 (take only the integer portion) and continue the loop
			newNum = Math.floor(newNum / 2);
	}

	// at the end of the loop, newStr should contain the whole number base-2

	// now convert newStr back to a number, and ...
	let base2Num = Number(newStr);

	// if count is zero, no need to adjust the number: starting number was whole
	if (count != 0) {

			// loop it to divide by 10 for (count) times
			for(let i = 0; i < count; i++) {
					base2Num /= 10;
			}
	}

	// round the number to correct digits past decimal point
	return Math.round((base2Num + Number.EPSILON) * Math.pow(10, count)) / Math.pow(10, count);
}

console.log(convertBase10ToBase2(0.375)); // should be 0.011: yes it is!
console.log(convertBase10ToBase2(0.875)); // should be 0.111: yes it is!