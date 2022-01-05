const readline = require('readline');
const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

// new function that promises to ask a question and 
// resolve to its answer
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, (input) => resolve(input) );
  });
}

// use promise-based `ask` function to ask several questions
// in a row and assign each answer to a variable
async function start() {
  let first = await ask("Enter a number? ");
  let second = await ask("Enter a second number? ");
  let result = sum(Number(first), Number(second));
  console.log("sum of " + first + 
    " and " + second + 
    "  is " + result);
  process.exit() ;
};

// launch your program since `await` only works inside `async` functions
start();
sum = (a, b) => a + b;

