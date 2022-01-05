// containsKeyWords problem
const containsKeyWords = (arr, key) => {
  return arr.filter(x => x.includes(key));
}

arr = ["test", "me", "hello", "wow"];
test = "es";
console.log(containsKeyWords(arr, test));

// find an average problem
const avg = (arr) => arr.reduce((a,b) => a + b, 0) / arr.length;
console.log(avg([1,2,3]));

// Find matching more than 2 times.
const find = (arr, keyword) => (arr, keyword) => arr.filter(x => x === keyword);

const findOccurences = (arr, keyword) => {
  const result = find(arr, keyword);
  return (result.length >= 2) ? result[0] : [];
}

test= ["hello","test1","hahaha","hello","hello","test1"];
keyword = 'hello';
console.log(findOccurences(test, keyword));

//print number
const printNumber = (val) => val.toString(10).split('').join(',');
console.log(printNumber(123));