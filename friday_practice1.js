// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223
// Click me to see the solution

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// Click me to see the solution

// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => {
  return a * b;
}

const math = (fn) => {
  return (a, b) => {
    return fn(a, b);
  };
}

// const testadd = math(3, 4, add);
// console.log(testadd);

const testadd2 = math(add)(3,4);

console.log(testadd2);

const testsub2 = math(3, 4, () => {
  return 3 - 4;
});

console.log(testsub2);