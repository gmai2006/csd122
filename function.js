const readline = require('readline-sync');
let input = readline.question('Please enter a number to check or enter a letter q to terminate the program');
let num = Number(input);

const isEven = (val) => {
  if ( val % 2 === 0) return 'This is an even number';
  else return 'This is an odd number';
}

console.log(isEven(8));
console.log(isEven(7));

// const multiply = (num1, num2) => {
//   return num1 * num2;
// }

// const echo = (str) => {
//   console.log(str);
// }

// const result = multiply(4, 5);
// console.log(result);
// echo('Display me');
