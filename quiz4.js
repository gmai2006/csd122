// Write a function to find the most frequent item of an array.
// Input: var arr1=['b', 'a', 'a', 'a', 'b', 'c', 'a', 'd', 'a', 'e', 'f', 'd', 'e'];
const arr1 = ['b', 'a', 'a', 'a', 'b', 'c', 'a', 'd', 'a', 'e', 'f', 'd', 'e'];
const dict = {};
arr1.forEach(item => {
  if (dict[item] === undefined) dict[item] = 1;
  else dict[item] = dict[item] + 1;
});

let max = Number.NEGATIVE_INFINITY;
for (key in dict) {
  console.log(`${key}, ${dict[key]}`);
  if (max < dict[key]) max = dict[key];
}
console.log(max);

// Write a JavaScript function to remove duplicate items from an array
// Input: var arr1=['b', 'a', 'a', 'a', 'b', 'c', 'a', 'd', 'a', 'e', 'f', 'd', 'e'];
// Expected Output : ['b', 'a', 'c', 'd', 'f', 'e']

//option 1: Use the Set data structure
const arr2 = ['b', 'a', 'a', 'a', 'b', 'c', 'a', 'd', 'a', 'e', 'f', 'd', 'e'];
const set = new Set(arr2);
console.log(set);

//option 2: Use dictionary (object)
//use concat or push yield the same result.  
//Concat is immutable operation.  Push is mutable operation
const dict2 = {};
const result = [];
arr2.forEach(item => {
  if (dict2[item] === undefined) {
    result.push(item);
    dict2[item] = 1;
  }
});
console.log(result);

// Write a union function to compute the union of two arrays.
// Example:
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]


const arr3 = [1, 2, 3];
const arr4 = [100, 2, 1, 10];

//option 1: use filter function, then use concat function to join to arrays
const filteredArr = arr4.filter(item => !arr3.includes(item));
const union = arr3.concat(filteredArr);
console.log(union);

//option 2: Use a for-loop and if statement
const tempArr = [];
for (item of arr4) {
  if (!arr3.includes(item)) tempArr.push(item);
}
const union2 = arr3.concat(tempArr);
console.log(union2);

