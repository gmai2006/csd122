//check a given number if it is even or odd
const readline = require('readline-sync');
let input = readline.question('Please enter a number to check or enter a letter q to terminate the program');
let num = Number(input)
console.log(num);
while ('' === input || isNaN(num) || num === Infinity || num === -Infinity || num == null) {
  if ('q' === input) {
    break;
  }
  input = readline.question('Invalid input please enter a number: ');
  num = Number(input);
}
if ('q' === input) {
  console.log("Thank you for using our program");
} else {
  if (Math.trunc(num) % 2 === 0) {
    console.log('This is a even number');
  } else {
    console.log('This is an odd');
  }
}

