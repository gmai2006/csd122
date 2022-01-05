`
Find a letter/string that has a max occurences in a given string
Find a letter/string that has more than 2 occurences in a given string
=> counting problem
recipe:
use Dictionary
JavasScript: Map
sentiment analysis
`
const str = 'abcadax';
const counter = new Map();
//data collection
for (const letter of str) {
  if (counter.has(letter)) {
    const currentVal = counter.get(letter);
    counter.set(letter, currentVal + 1);
  } else {
    counter.set(letter, 1);
  }
}

let max = 0;
let max_key = undefined;
for (const key of counter.keys()) {
  if (counter.get(key) > max) {
    max = counter.get(key);
    max_key = key;
  }
}

console.log(`${max_key} has ${max}`);

const func = () => {
  return {key1:'test', key2: 'test2'};
}

const var1 = func();
console.log(var1.key1);

